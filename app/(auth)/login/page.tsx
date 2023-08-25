import { Metadata } from "next"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import  UserAuth  from "@/components/user-auth"

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}

const Login = () => {
    return (
        <div className='flex flex-grow flex-col items-center max-w-7xl w-screen'>
            <div className='flex w-full gap-2 p-4 md:p-8'>
                <Button variant='ghost'  asChild>
                    <Link
                        href="/"
                        className=' text-accent-foreground hover:text-brand'
                    >
                        <ChevronLeftIcon className='w-4 h-4 mr-2' />
                        Back
                    </Link>
                </Button>
            </div>
            <div className="mx-auto p-4 flex-grow flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col items-center space-y-2 text-center">
                <div className="w-10 h-10 border-[3px] border-primary rounded-2xl mb-4" />
                <h1 className="text-2xl font-semibold tracking-tight">
                    Welcome back
                </h1>
                <p className="text-sm text-muted-foreground">
                    Sign in to your account
                </p>
                </div>
                <UserAuth />
                <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                    href="/register"
                    className="hover:text-brand underline underline-offset-4"
                >
                    {"Don't have an account? Sign Up"}
                </Link>
                </p>
            </div>
            </div>
    )
}
  
export default Login