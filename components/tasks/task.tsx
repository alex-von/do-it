'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Task } from "@/lib/types"

const TaskComponent = ({ task }:{ task: Task}) => {
    const [data, setData] = useState<Task>(task)
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        
        const updateTask = async () => {
            try {
                const res = await fetch(`/api/task/${data.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const updatedTask = await res.json();
                console.log("API Response:", updatedTask);
            } catch (error) {
                console.error("API Error:", error);
            }
        };

        updateTask();

    }, [data]);

    return (
        <div className="flex items-center gap-4 border border-muted-foreground p-4 rounded-2xl">
            <Checkbox className="w-9 h-9 border-[3.5px] rounded-[15px]"
                onCheckedChange={(checked) => {
                    const updatedTask: Task = { ...data, completed: checked as boolean };
                    setData(updatedTask);
                }}
                checked={data.completed}
            />
            <Link href={`/tasks/${data.id}`} className="w-full">
                <div>
                    <h1 className="">{data.title}</h1>
                    <p className="text-muted-foreground text-sm">{data.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default TaskComponent