'use client'

import { usePathname } from 'next/navigation'
import { User } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import SignOut from './ui/sign-out'
import Link from 'next/link'
import { GearIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'


const Nav = ({ user }: { user: User }) => {
    const pathname = usePathname()

    if (user && pathname !== '/') {
        return (
            <nav className="border-b p-4 sticky top-0 bg-accent w-screen">
                {/* Nav bar with buttons to home, task, and project page */}
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border-[4px] border-primary rounded-[17px]" />
                    </div>
                    <div>
                        <Button variant='ghost' className='hover:bg-' asChild>
                            <Link href='/home'>
                                Home
                            </Link>
                        </Button>
                        <Button variant='ghost' asChild>
                            <Link href='/tasks'>
                                Tasks
                            </Link>
                        </Button>
                        <Button variant='ghost' asChild>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </Button>
                    </div>
                    <div className="flex gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarFallback>
                                        {user.name[0]}
                                    </AvatarFallback>
                                    <AvatarImage src={user.image} alt={user.name} />
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='mr-4'>
                                <DropdownMenuLabel className=''>
                                    <p>{user.name}</p>
                                    <p className='font-light text-muted-foreground'>{user.email}</p>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link 
                                        href='/myaccount'
                                        className='flex items-center gap-3'
                                    >
                                        <GearIcon className='w-4 h-4' />
                                        <p>Account</p>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><SignOut /></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        )
    } else {
        return null
    }
}

export default Nav