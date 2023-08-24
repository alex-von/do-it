'use client'

import Link from "next/link"
import { useState } from "react"
import { 
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { AvatarIcon, ExitIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"

const links = [
    {
        name: "Home",
        href: "/home",
    },
    {
        name: "Today",
        href: "/today",
    },
    {
        name: "Tasks",
        href: "/tasks",
    },
    {
        name: "Projects",
        href: "/projects",
    },
]

export const MainNav = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    return (
        <nav className={`hidden md:flex flex-col w-1/4 min-w-[300px] bg-card m-4 rounded-2xl shadow-md overflow-hidden`}>
            <div className="flex justify-between p-8">
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <div className="border-[3px] border-foreground w-8 h-8 rounded-[13px]"/>
                    </div>
                </Link>
            </div>
            <div className="px-6">
                <ul className="flex flex-col gap-4 mt-4">
                    {links.map((link) => (
                        <li key={link.name} className={`p-4 rounded-2xl hover:bg-muted ${pathname === link.href ? "bg-muted" : ""}`}>
                            <Link href={link.href} className="flex gap-2 items-center">
                                <div className="border-2 border-foreground w-4 h-4 rounded-md"/>
                                {
                                    !open && (
                                        <p className="text-primary-foregound">
                                            {link.name}
                                        </p>
                                    )
                                }
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col flex-grow items justify-end ">
                <div className="flex justify-between items-center border-t p-4 ">
                    <ThemeToggle />
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback>AV</AvatarFallback>
                                    <AvatarImage src="https://github.com/alex-von.png" />
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href='/myaccount'>
                                        Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="space-x-2 text-destructive">
                                    <ExitIcon className="" />
                                    <p>Sign Out</p>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export const MobileNav = () => {
    return (
        <nav className="flex items-center justify-between md:hidden p-4 m-4 border-b border-muted shadow-sm sticky top-0 bg-card rounded-2xl">
            <Link href="/">
                <div className="flex items-center gap-4">
                    <div className="border-[3px] border-foreground w-8 h-8 rounded-[13px]"/>
                </div>
            </Link>
            <div className="flex items-center gap-4">
                <Avatar className="w-8 h-8">
                    <AvatarFallback>AV</AvatarFallback>
                    <AvatarImage src="https://github.com/alex-von.png" />
                </Avatar>
                <Button variant='outline'>
                    <HamburgerMenuIcon />
                </Button>
            </div>
        </nav>
    )
}