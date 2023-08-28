import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

// Get all projects
export async function GET() {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        const projects = await prisma.project.findMany({
            where: {
                userId: user.id
            }
        })

        if (!projects) {
            return NextResponse.json({ error: 'No tasks found' }, { status: 404 })
        }

        return NextResponse.json( projects , { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}

// Create a project
export async function POST(request: NextRequest) {
    try {
        const user = await getCurrentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        const data = await request.json()

        const newProject = {
            ...data,
            userId: user?.id
        }
        const project = await prisma.task.create({
            data: newProject
        })
        
        return NextResponse.json( project , { status: 201 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}