import Link from 'next/link';
import Heading from '../../components/ui/Heading';
import { TbArrowBackUp } from 'react-icons/tb';
import AddTaskForm from '@/app/components/tasks/AddTaskForm';
import TaskForm from '@/app/components/tasks/TaskForm';

export default function newTaskPage() {
  return (
    <>
      <div
        className="flex flex-col gap-2 p-4 bg-blue-900 rounded-lg shadow-md width-full items-center"
        >
          <Heading>Crear nueva tarea</Heading>
          <AddTaskForm>
            <TaskForm />
          </AddTaskForm>
          <Link
              href="/tasks"
              className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded w-30 h-10 items-center flex gap-3"
        >
          <TbArrowBackUp />
          Volver
        </Link>
      </div>
    </>
  )
}
