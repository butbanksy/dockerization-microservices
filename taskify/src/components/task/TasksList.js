import React from "react";
import Task from "./Task";
import { Link } from "react-router-dom";

export default function TasksList() {
  return (
    <>
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-6xl font-medium title-font mb-2 text-white">
          Mes tâches
        </h1>
      </div>

      <button className="inline-flex text-white font-semibold bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-sm my-5">
        <Link to="/dashboard/create">Créer une nouvelle tâche</Link>
      </button>

      <div className="flex flex-wrap -m-4">
        <Task
          title="Shooting Stars"
          description="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm."
          isDone={true}
        />
        <Task
          title="Shooting Stars"
          description="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm."
          isDone={true}
        />
        <Task
          title="Shooting Stars"
          description="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm."
          isDone={false}
        />
        <Task
          title="Shooting Stars"
          description="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm."
          isDone={true}
        />
        <Task
          title="Shooting Stars"
          description="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm."
          isDone={false}
        />
        <Task
          title="Shooting Stars"
          description="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm."
          isDone={true}
        />
      </div>
    </>
  );
}
