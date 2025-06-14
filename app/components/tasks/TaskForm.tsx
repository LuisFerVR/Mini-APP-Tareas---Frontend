import React from 'react'

export default function TaskForm() {
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
                />
            </div>
        </div>
    </>
  )
}
