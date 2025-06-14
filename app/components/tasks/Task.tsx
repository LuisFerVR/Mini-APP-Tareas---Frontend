import { Task } from "@/app/src/schemas";

export default function TaskComponent({task}: {task: Task}) {
  return (
    <>
        <div className="flex flex-col items-start h-full text-white bg-blue-950 shadow-2xl border-1 border-blue-950 p-2 rounded-lg">
            <h1><strong>Título:</strong> {task.title}</h1>
            <p><strong>Descripción:</strong> {task.description}</p>
        </div>
    </>
  )
}
