import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Main = () => {
  return (
    <div className='flex flex-grow flex-col items-center'>
      <div className='flex justify-end w-full gap-2 p-4 md:p-8'>
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
      </div>
      <div className='flex flex-grow flex-col items-center justify-center'>
        <div className='flex items-center gap-4'>
          <div className="w-14 h-14 border-[5px] border-primary rounded-[20px]" />
          <h1 className="text-3xl font-semibold tracking-tight">
              do it
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Main