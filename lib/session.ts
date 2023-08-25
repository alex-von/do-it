import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { User } from "@/lib/types"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user as User
}