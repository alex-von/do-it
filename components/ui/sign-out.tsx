'use client'

import { signOut
 } from "next-auth/react"
const SignOut = () => {
  return (
    <p
        className="text-sm text-muted-foreground cursor-pointer"
        onClick={() => signOut()}
    >
        Sign Out
    </p>
  )
}

export default SignOut
