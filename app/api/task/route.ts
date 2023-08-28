import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

// Get all tasks
export async function GET() {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        const tasks = await prisma.task.findMany({
            where: {
                userId: user.id
            }
        })

        if (!tasks) {
            return NextResponse.json({ error: 'No tasks found' }, { status: 404 })
        }

        return NextResponse.json( tasks , { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}

// Create a task
export async function POST(request: NextRequest) {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        const data = await request.json()

        const newTask = {
            ...data,
            userId: user?.id
        }
        const task = await prisma.task.create({
            data: newTask
        })
        
        return NextResponse.json( task , { status: 201 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}