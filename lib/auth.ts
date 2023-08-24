import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "@auth/core/adapters"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
  
    session: {
        strategy: "jwt",
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        Google({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    callbacks: {
        async session({ token, session}: { token: any, session: any }) {
            if (token) {
              session.user.id = token.id
              session.user.name = token.name
              session.user.email = token.email
              session.user.image = token.picture
            }
            return session
          },
        async jwt({ token, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                  email: token.email,
                },
              })

              if (!dbUser) {
                if (user) {
                  token.id = user?.id
                }
                return token
              }

              return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
              }
        },


    }
};