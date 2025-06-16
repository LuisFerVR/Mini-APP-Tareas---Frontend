import Heading from "@/app/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center text-white">
        <Heading>Tarea No Encontrada</Heading>
        <p>
            Tal vez quieras volver a {''}
            <Link className="font-bold cursor-pointer underline underline-offset-8" href={'/tasks'}>Tareas</Link>
        </p>
    </div>
  )
}
