'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { FcGoogle } from "react-icons/fc"
import { ImSpinner8 } from 'react-icons/im'

const UserAuth = () => {
    const [isGitHubLoading, setIsGitHubLoading] = useState(false)
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)

    return (
        <div className="flex flex-col gap-2">
            <Button 
                variant='outline'
                type="button"
                onClick={() => {
                    setIsGitHubLoading(true)
                    signIn("github")
                }}
                asChild
            >   
                <div className="space-x-4 cursor-pointer">
                    {
                        isGitHubLoading ? (
                            <ImSpinner8 className="animate-spin h-5 w-5" />
                        ) : (
                            <GitHubLogoIcon className="h-5 w-5" />
                        )
                    }
                    <p>Sign in with GitHub</p>
                </div>
            </Button>
            <Button 
                variant='outline'
                type="button"
                onClick={() => {
                    setIsGitHubLoading(true)
                    signIn("google")
                }}
                asChild
            >   
                <div className="space-x-4 cursor-pointer">
                    {
                        isGoogleLoading ? (
                            <ImSpinner8 className="animate-spin h-5 w-5" />
                        ) : (
                            <FcGoogle className="h-5 w-5" />
                        )
                    }
                    <p>Sign in with Google</p>
                </div>
            </Button>
        </div>
    )
}

export default UserAuth
