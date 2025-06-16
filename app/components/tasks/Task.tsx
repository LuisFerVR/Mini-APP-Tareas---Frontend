import { Task } from "@/app/src/schemas";
import { FaPencilAlt } from "react-icons/fa";
import DeleteTaskForm from "./DeleteTaskForm";
import Link from "next/link";

export default function TaskComponent({task}: {task: Task}) {
  return (
    <>
        <div
          className="flex flex-wrap sm:flex-nowrap justify-between h-full text-white bg-blue-950 shadow-2xl border border-blue-950 p-2 rounded-lg overflow-hidden"
        >
          <div
            className="flex flex-col gap-3 justify-center max-w-full w-full px-4 min-w-0"
          >
              <h1><strong>Título:</strong> {task.title}</h1>
              <p><strong>Descripción:</strong> {task.description}</p>
          </div>
          <div
            className="flex sm:flex-col gap-3 items-center justify-center max-w-full w-full px-4"
          >
            <Link
              href={`/tasks/${task.id}/update`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:py-2 sm:px-4 rounded w-20 sm:w-40 h-10 flex items-center justify-center gap-2 text-xs sm:text-base cursor-pointer"
            >
              <FaPencilAlt className="text-sm sm:text-base" />
              <span className="hidden sm:inline">Actualizar</span>
            </Link>
            <DeleteTaskForm id={task.id} />
          </div>
        </div>
    </>
  )
}
