import { Metadata } from "next"
import { getCurrentUser } from "@/lib/session"
import  SignOut  from "@/components/ui/sign-out"

export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
}

const Home = async () => {
    const user = await getCurrentUser()

    return (
        <div className='flex flex-col flex-grow items-center justify-center'>
            <h1 className="font-medium text-2xl">Home</h1>
            <p>
                {user ? `Welcome ${user?.name?.split(' ')[0]}` : 'Welcome'}
            </p>
            <SignOut />
        </div>
    )
  }
  
export default Home