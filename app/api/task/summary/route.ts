import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export async function GET() {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        // get a count of task due today
        const dueToday = await prisma.task.count({
            where: {
                userId: user.id,
                dueDate: {
                    gte: new Date().toISOString().slice(0, 10),
                    lte: new Date().toISOString().slice(0, 10),
                },
            },
        })
        // get a count of task due within a week
        const dueThisWeek = await prisma.task.count({
            where: {
                userId: user.id,
                dueDate: {
                    gte: new Date().toISOString().slice(0, 10),
                    lte: new Date(
                        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
                    ).toISOString().slice(0, 10),
                },
            },
        })
        // get a count of task completed today
        const completedToday = await prisma.task.count({
            where: {
                userId: user.id,
                completed: true,
                completionDate: {
                    gte: new Date().toISOString().slice(0, 10),
                    lte: new Date().toISOString().slice(0, 10),
                },
            },
        })

        // get a count of all completed task
        const completed = await prisma.task.count({
            where: {
                userId: user.id,
                completed: true,
            },
        })

        console.log(dueToday, dueThisWeek, completedToday, completed)

        // Create a summary object
        const summary = {
            dueToday,
            dueThisWeek,
            completedToday,
            completed,
        }

        return NextResponse.json({ summary }, { status: 200 })
        
    } catch (error) {
        return NextResponse.json( error , { status: 500 })
    }
}