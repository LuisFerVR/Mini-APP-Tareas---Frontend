import { Task } from "@/app/src/schemas";
import { FaPencilAlt } from "react-icons/fa";
import DeleteTaskForm from "./DeleteTaskForm";
import Link from "next/link";

export default function TaskComponent({task}: {task: Task}) {
  return (
    <>
        <div
          className="flex justify-between h-full text-white bg-blue-950 shadow-2xl border-1 border-blue-950 p-2 rounded-lg"
        >
          <div
            className="flex flex-col gap-2 mr-3"
          >
              <h1><strong>Título:</strong> {task.title}</h1>
              <p><strong>Descripción:</strong> {task.description}</p>
          </div>
          <div
            className="flex flex-col gap-3 items-center justify-center"
          >
            <Link
              href={`/tasks/${task.id}/update`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 h-10 items-center flex gap-3 cursor-pointer"
            >
              <FaPencilAlt />
              Actualizar
            </Link>
            <DeleteTaskForm id={task.id} />
          </div>
        </div>
    </>
  )
}
