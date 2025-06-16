import { Task } from '@/app/src/schemas'
import React from 'react'

export default function TaskForm({task}:{task?: Task}) {
  return (
    <>
        <div
            className='text-white'
        >
            <div
                className="space-y-2 mb-2"
            >
                <label
                    htmlFor="title"
                    className="block"
                >
                    Titulo:
                </label>
                <input
                    id="title"
                    type="text"
                    placeholder="Título de la tarea"
                    className="border w-full p-2"
                    name="title"
                    defaultValue={task?.title || ''}
                />
            </div>

            <div
                className="space-y-2 "
            >
                <label
                    htmlFor="description"
                    className="block"
                >
                    Descripción:
                </label>
                <textarea
                    id="description"
                    rows={5}
                    placeholder="Descripción de la tarea"
                    className="border w-full p-2"
                    name="description"
                    defaultValue={task?.description || ''}
                />
            </div>
        </div>
    </>
  )
}
