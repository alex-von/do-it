import { Metadata } from "next"
import { getCurrentUser } from "@/lib/session"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
}

const Home = async () => {
    const user = await getCurrentUser()

    const getGreeting = (): string => {
        const currentHour = new Date().getHours();
    
        if (currentHour >= 0 && currentHour < 12) {
            return "Good Morning";
        } else if (currentHour >= 12 && currentHour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    return (
        <div className='flex flex-grow flex-col max-w-7xl w-screen p-4'>
            <div className="mx-auto w-full flex flex-col flex-grow">
                <div className="my-8">
                    <h1 className="text-2xl">
                    {getGreeting()}, <span className="font-semibold">{user.name.split(' ')[0]}!</span>
                    </h1>
                    <p className="text-sm mt-6">
                        {"This is where you'll be able to see an overview of your tasks and projects as well as stats about your productivity."}
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="mt-4 border-2 border-muted-foreground border-dashed rounded-2xl p-4">
                    <p className="text-muted-foreground font-medium flex flex-col flex-grow justify-center items-center">
                        No tasks yet.
                    </p>
                </div>
                <div className="flex justify-end mt-2">
                    <Button variant='ghost' asChild>
                        <Link href='/tasks'>
                            <p>View all task</p>
                            <ArrowRightIcon className="ml-2" />
                        </Link>
                    </Button>
                </div>
                <div className="mt-4 border-2 border-muted-foreground border-dashed rounded-2xl p-4">
                    <p className="text-muted-foreground font-medium flex flex-col flex-grow justify-center items-center">
                        No projects yet.
                    </p>
                </div>
                <div className="flex justify-end mt-2">
                    <Button variant='ghost' asChild>
                        <Link href='/projects'>
                            <p>View all projects</p>
                            <ArrowRightIcon className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
  
export default Home