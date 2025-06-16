import { Task } from "@/app/src/schemas";
import { revalidatePath } from "next/cache";
import { FaTrash } from "react-icons/fa";

export default function DeleteTaskForm({id}: {id: Task['id']}) {

    async function handleDeleteTask() {
        "use server";
        const url = `${process.env.API_URL}/tasks/${id}`;
        const req = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await req.json();
        revalidatePath('/tasks');
        return res;
    }
    return (
        <form
            action={(handleDeleteTask)}
        >
            <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 sm:py-2 sm:px-4 rounded w-20 sm:w-40 h-10 flex items-center justify-center gap-2 text-xs sm:text-base"
            >
                <FaTrash className="text-sm sm:text-base" />
                <span className="hidden sm:inline">Eliminar</span>
            </button>
        </form>
    )
}
