import { Metadata } from "next"
import { getCurrentUser } from "@/lib/session"

export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
}

const Home = async () => {
    const user = await getCurrentUser()

    return (
        <div className='flex flex-grow flex-col max-w-7xl w-screen p-4'>
            <div className="flex flex-col flex-grow justify-center items-center">
                <h1 className="text-lg">
                    Welcome, <span className="font-semibold">{user.name.split(' ')[0]}!</span>
                </h1>
                <p>
                    This is where you'll be able to see your tasks and projects.
                </p>
            </div>
        </div>
    )
}
  
export default Home