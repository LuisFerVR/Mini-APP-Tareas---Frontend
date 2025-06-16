"use client"

import { FaSave } from "react-icons/fa"
import { useActionState, useEffect } from "react"
import { updateTaskAction } from "@/app/actions/update-task-action"
import Swal from "sweetalert2"
import { useParams, useRouter } from "next/navigation"

export default function UpdateTaskForm({children}: {children?: React.ReactNode}) {
    const router = useRouter();
    const {taskId} = useParams<{taskId: string}>();

    const updateTaskActionWithId = updateTaskAction.bind(null, +taskId);
    const [state, dispatch] = useActionState(updateTaskActionWithId, {
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
            router.push('/tasks');
        }
        if(state.errors.length > 0) {
            Swal.fire({
                title: '¡Error!',
                text: state.errors.join(','),
                icon: 'error',
                confirmButtonText: 'Aceptar',
            })
        }
    }, [state, router]);

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
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded w-50 h-10 flex items-center gap-3 mt-3"
            >
                <FaSave/>
                Guardar Cambios
            </button>
        </div>
    </form>
  )
}
