export type User = {
    id: string
    name: string
    email: string
    image: string
}

export type Task = {
    id: string;
    title: string;
    description?: string;
    priority?: string;
    progress?: string;
    dueDate?: Date;
    completed: boolean;
    completionDate?: Date;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
}