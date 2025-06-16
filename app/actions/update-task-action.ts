"use server";
import { ErrorResponseSchema, Task, TasksResponseSchema } from "../src/schemas";

type ActionStateType = {
    errors: string[];
    success: string;
}
export async function updateTaskAction(taskId: Task['id'],prevState: ActionStateType,formData: FormData) {
    const task = TasksResponseSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description')
    });

    if (!task.success) {
        return {
            errors: task.error.errors.map(error => error.message),
            success: ''
        }
    }

    const url = `${process.env.API_URL}/tasks/${taskId}`;

    const req = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${process.env.API_TOKEN}`
        },
        body: JSON.stringify(task.data)
    });

    const res = await req.json();
    if (!req.ok) {
        const errors = ErrorResponseSchema.parse(res);
        return {
            errors: errors.message.map(issue => issue),
            success: ''
        }
    }

    return {
        errors: [],
        success: 'Tarea actualizada correctamente'
    }
}