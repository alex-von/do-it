import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export const Footer = () => {
    return (
        <footer className="border-t p-4 sticky bg-accent">
            <div className="flex justify-between max-w-5xl mx-auto items-center">
                <div className='flex gap-2 items-center text-muted-foreground'>
                    <Avatar className='aspect-square w-6 h-6'>
                        <AvatarImage src="https://github.com/alex-von.png" alt="Alex Vongseng" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <p className="text-semibold text-xs">
                        Made by <Link className="underline" href="https://github.com/alex-von" target='_blank'>Alex</Link>
                    </p>
                </div>
                <ThemeToggle />
                <p className="text-xs text-muted-foreground">
                    © 2023 Alex Vongseng
                </p>
            </div>
        </footer>
    )
}