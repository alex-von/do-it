'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Task } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import TaskComponent from "@/components/tasks/task"

const Tasks = () => {
    const [loading, setLoading] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        setLoading(true)
        const getTasks = async () => {
            const res = await fetch('/api/task')
            const data = await res.json()
            setTasks(data)
            setLoading(false)
        }

        getTasks()
    }, [])

    // create task
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Submitting")
        const data = new FormData(e.currentTarget)
        const title = data.get('title')
        const task = {
            title,
        }
        console.log("new task:", task)
        const res = await fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify(task)
        })
        console.log(res)
        const newTask = await res.json()
        console.log("API Response:", newTask)
        setTasks([...tasks, newTask])
    }

    return (
        <div className='flex flex-grow flex-col max-w-7xl w-screen p-4'>
            <div className="mx-auto w-full flex flex-col flex-grow">
                <div className="my-8">
                    <h1 className="text-2xl">
                        Tasks
                    </h1>
                    <div>
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
                            <Input 
                                className="" 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Add a task"
                                required
                            />
                            <Button type="submit" className="bg-primary-foreground text-primary-background">
                                Create
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-col gap-4 my-8">
                        {loading ? (
                            <>
                                <Skeleton className="h-20 bg-muted-foreground rounded-2xl" />
                                <Skeleton className="h-20 bg-muted-foreground rounded-2xl" />
                            </>

                        ) : (
                            <ul className="flex flex-col gap-4">
                                {
                                    tasks.map((task) => (
                                        <li key={task.id}>
                                            <TaskComponent task={task} />
                                        </li>
                                    ))
                                }
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks