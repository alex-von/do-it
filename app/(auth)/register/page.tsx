import { Metadata } from "next"
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import  UserAuth  from "@/components/user-auth"

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}

const Register = () => {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/login"
                className={cn(
                buttonVariants({ variant: "ghost" }),
                "absolute right-4 top-4 md:right-8 md:top-8"
                )}
            >
                Login
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col items-center space-y-2 text-center">
                <div className="w-10 h-10 border-[3px] border-primary rounded-2xl mb-4" />
                <h1 className="text-2xl font-semibold tracking-tight">
                    Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Create an account GitHub or Google
                </p>
                </div>
                <UserAuth />
                <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                    href="/register"
                    className="hover:text-brand underline underline-offset-4"
                >
                    {'Already have an account? Sign In'}
                </Link>
                </p>
            </div>
            </div>
    )
}
  
export default Register