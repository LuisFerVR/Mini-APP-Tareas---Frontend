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
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-40 h-10 items-center flex gap-3 cursor-pointer"
                type="submit"
            >
                <FaTrash />
                Eliminar
            </button>
        </form>
    )
}
