'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { Task } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Arrow } from "@radix-ui/react-dropdown-menu"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AvatarIcon, Cross2Icon, DotsVerticalIcon, HeartIcon, Link2Icon, PaperPlaneIcon, PlusIcon, ResetIcon, TrashIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"


export default function Page(
    { params }: { params: { id: string } }
) {
    const router = useRouter()
    const [task, setTask] = useState<Task>({} as Task)
    const [loading, setLoading] = useState(false)

    const taskId = params.id

    useEffect(() => {
        setLoading(true)
        const getTask = async () => {
            const res = await fetch(`/api/task/${taskId}`)
            const data = await res.json()
            setLoading(false)
            setTask(data)
        }
        setTimeout(() => {
            getTask()
        }, 1000)
    }, [])

    return (
        <div className='flex flex-grow flex-col max-w-7xl w-screen p-4'>
            <div className="mx-auto gap-4 w-full flex flex-col flex-grow">
                <Card className="flex flex-col p-4 md:p-6 rounded-3xl flex-grow">
                    <div className="flex justify-between">
                        {/* Back button */}
                        <Button size='icon' variant="ghost" onClick={() => router.back()}>
                            <Cross2Icon className="w-6 h-6 text-muted-foreground" />
                        </Button>
                        {/* Edit & Share */}
                        <div className="flex  items-center gap-2">
                            {
                                loading ? (
                                    <Skeleton className="w-24 h-10 rounded-full" />
                                ) : (
                                    <>
                                        <Button size='icon' variant="ghost">
                                            <AvatarIcon className="w-6 h-6 text-muted-foreground" />
                                        </Button>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size='icon' variant="ghost">
                                                    <DotsVerticalIcon className="w-6 h-6 text-muted-foreground" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem>
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex gap-2 text-destructive">
                                                        <TrashIcon className="w-4 h-4" />
                                                        <p className="text-destructive">Delete</p>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex-grow py-8 p-2">
                            <div className="mx-auto md:max-w-2xl">
                                {
                                    loading ? (
                                        <div className="flex gap-4">
                                            <Skeleton className="w-12 h-12 rounded-2xl" />
                                            <Skeleton className="w-full h-12 rounded-2xl" />
                                        </div>
                                    ) : (
                                        <>
                                        <div className="pb-2">
                                            <p className="text-lg text-muted-foreground">Due today</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Checkbox
                                                checked={task.completed}
                                                className="w-6 h-6 border-2 text-muted-foreground"
                                            />
                                            <h1 className="text-2xl font-regular ">{task.title}</h1>
                                        </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                </Card>
            </div>
        </div>
    )
}