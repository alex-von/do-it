'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { Task } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"

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

        getTask()
    }, [])

    return (
        <div className='flex flex-grow flex-col max-w-7xl w-screen p-4'>
            <div className="mx-auto w-full flex flex-col flex-grow">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <h1 className="text-2xl font-medium">{task.title}</h1>
                        <p className="text-muted-foreground text-sm">{task.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}