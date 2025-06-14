"use client";
import { FaSave } from "react-icons/fa";

export default function AddTaskForm({children}: {children?: React.ReactNode}) {
  return (
    <form
        action=''
    >
        {children}
        <div
            className="flex justify-center items-center"
        >
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded w-30 h-10 flex items-center gap-3 mt-3"
            >
                <FaSave/>
                Guardar
            </button>
        </div>
    </form>
  )
}
