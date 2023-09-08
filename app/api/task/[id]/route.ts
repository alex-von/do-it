import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export async function GET(
    request: NextRequest, 
    { params }: { params: { id: string } }
) {
    const id = params.id

    try {
        const user = await getCurrentUser()

        const task = await prisma.task.findUnique({
            where: {
                userId: user?.id,
                id: id
            },
        })

        if (!task) {
            return NextResponse.json({ error: 'No task found' }, { status: 404 })
        }

        return NextResponse.json( task , { status: 200 })
    } catch (error) {
        return NextResponse.json( error , { status: 500 })
    }
}

export async function PUT(
    request: NextRequest, 
    { params }: { params: { id: string } }
) {
    const id = params.id

    try {
        const user = await getCurrentUser()

        const data = await request.json()

        const task = await prisma.task.update({
            where: {
                userId: user?.id,
                id: id
            },
            data: data,
        })

        return NextResponse.json( task , { status: 200 })
    } catch (error) {
        return NextResponse.json( error , { status: 500 })
    }
}

export async function DELETE(
    request: NextRequest, 
    { params }: { params: { id: string } }
) {
    const id = params.id

    try {
        const user = await getCurrentUser()

        const task = await prisma.task.delete({
            where: {
                userId: user?.id,
                id: id
            },
        })

        return NextResponse.json( task , { status: 200 })
    } catch (error) {
        return NextResponse.json( error , { status: 500 })
    }
}