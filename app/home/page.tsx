import { Metadata } from "next"
import { getCurrentUser } from "@/lib/session"
import  SignOut  from "@/components/ui/sign-out"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
}

const Home = async () => {
    const user = await getCurrentUser()

    return (
        <div className='flex flex-grow flex-col max-w-7xl w-screen p-4'>
            <div className="flex-grow">
                <h1 className="font-medium text-2xl">Home</h1>
                <p>
                    {user ? `Welcome ${user?.name?.split(' ')[0]}` : 'Welcome'}
                </p>
                <SignOut />
            </div>
        </div>
    )
  }
  
export default Home