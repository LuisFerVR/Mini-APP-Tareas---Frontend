"use client";
import { addTaskAction } from "@/app/actions/add-task-action";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { FaSave } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AddTaskForm({children}: {children?: React.ReactNode}) {
    const [state, dispatch] = useActionState(addTaskAction, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if(state.success) {
            Swal.fire({
                title: '¡Éxito!',
                text: state.success,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
            redirect('/tasks');
        }
        if(state.errors.length > 0) {
            Swal.fire({
                title: '¡Error!',
                text: state.errors.join(','),
                icon: 'error',
                confirmButtonText: 'Aceptar',
            })
        }
    },[state])

  return (
    <form
        action={dispatch}
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
