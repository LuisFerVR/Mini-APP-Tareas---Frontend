import Link from 'next/link';
import Heading from '../../../components/ui/Heading';
import { TbArrowBackUp } from 'react-icons/tb';
import TaskForm from '@/app/components/tasks/TaskForm';
import UpdateTaskForm from '@/app/components/tasks/UpdateTaskForm';
import { TasksResponseSchema } from '@/app/src/schemas';
import { notFound } from 'next/navigation';

type Params = Promise<{taskId: string}>;

async function getTaskById(id:number) {
  const url = `${process.env.API_URL}/tasks/${id}`;
  const req = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.API_TOKEN}`,
    }
  });
  if(!req.ok) {
    notFound();
  }
  const res = await req.json();
  const task = TasksResponseSchema.parse(res);
  return task;
}

export default async function UpdateTaskPage({ params }: { params: Params }) {
  const { taskId } = await params;
  const task = await getTaskById(+taskId);
  return (
    <>
      <div
        className="flex flex-col gap-2 p-4 bg-blue-900 rounded-lg shadow-md width-full items-center"
      >
          <Heading>Actualizar tarea</Heading>
          <UpdateTaskForm>
            <TaskForm task={task}/>
          </UpdateTaskForm>
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
