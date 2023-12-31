import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getCurrentUser } from '@/lib/session'
import { EnterIcon } from '@radix-ui/react-icons'

const Main = async () => {
  const user = await getCurrentUser()
  return (
    
    <div className='flex flex-grow w-screen flex-col items-center max-w-7xl'>
      <div className='flex justify-end w-full gap-2 p-4 md:p-8'>
        {
          !user ? (
            <>
              <Button variant='ghost'  asChild>
                <Link
                  href="/register"
                  className='text-accent-foreground hover:text-brand'
                >
                  Register
                </Link>
              </Button>
              <Button variant='ghost'  asChild>
                <Link
                  href="/login"
                  className='text-accent-foreground hover:text-brand'
                >
                  Login
                </Link>
              </Button>
            </>
          ) : (
            <Button variant='ghost'  asChild>
              <Link
                href="/home"
                className='text-accent-foreground hover:text-brand'
              >
                Signed in as {user.name.split(' ')[0]}
                <EnterIcon className='w-4 h-4 ml-3' />
              </Link>
            </Button>
          )
        }
      </div>
      <div className='flex flex-grow flex-col items-center justify-center'>
        <div className='flex items-center gap-4'>
          <div className="w-14 h-14 border-[5px] border-primary rounded-[20px]" />
          <h1 className=" bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent text-4xl font-semibold tracking-tight">
              do it
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Main