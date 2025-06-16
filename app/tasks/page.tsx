import Link from "next/link";
import Heading from '../components/ui/Heading';
import { TasksResponseSchema } from "../src/schemas";
import TaskComponent from "../components/tasks/Task";
import { FaPlusSquare } from "react-icons/fa";

async function getTasks() {
    const url = `${process.env.API_URL}/tasks`;
    const req = await fetch(url,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
        }
    });
    const res = await req.json();
    if (!req.ok) {
        throw new Error('Error al obtener las tareas');
    }
    const tasks = TasksResponseSchema.array().parse(res);
    return tasks;
}

export default async function getTaskPage() {
    const tasks = await getTasks();
    console.log('tasks:', tasks);

    return (
        <>
            <div
                className="flex flex-col gap-2 p-4 bg-blue-900 rounded-lg shadow-md width-full items-center"
            >
                <div
                    className="flex flex-col gap-2"
                >
                    <Heading>Tareas</Heading>
                    {
                        tasks.length >= 1 ?
                        (
                            tasks.map(task => (
                                <TaskComponent key={task.id} task={task} />
                            ))
                        ) :
                        (
                            <p className="text-white text-lg">No hay tareas</p>
                        )
                    }
                </div>
                <Link
                    href="/tasks/new"
                    className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded w-40 h-10 items-center flex gap-3"
                >
                    <FaPlusSquare/>
                    Nueva Tarea
                </Link>
            </div>
        </>
    )
}
