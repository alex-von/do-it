import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='flex justify-between border-b py-4'>
        <div className="flex justify-between items-center max-w-5xl mx-auto px-4 flex-grow">
            <div className='flex items-center gap-2'>
                <div className='w-8 h-8 border-[3px] rounded-[13px]' />
                <h1 className='text-lg font-medium text-muted-foreground'>do it</h1>
            </div>
            <div>
                <Link href="http://github.com/alex-von/do-it.git" target="_blank">
                    <GitHubLogoIcon className='w-6 h-6 text-muted-foreground' />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav
