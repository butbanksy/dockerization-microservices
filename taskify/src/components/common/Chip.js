import React from "react";

export default function Chip({ isDone }) {
  return (
    <div>
      {isDone ? (
        <div class="flex justify-center items-center w-1/3 my-1 -mx-1 py-2 rounded-full bg-green-700 text-base text-white font-medium">
          <div class="flex-initial leading-none text-sm font-medium">
            Tâche finie
          </div>
        </div>
      ) : (
        <div class="flex justify-center items-center w-1/3 my-1 -mx-1 py-2 rounded-full bg-red-500 text-base text-white font-medium">
          <div class="flex-initial leading-none text-sm font-medium">
            En cours
          </div>
        </div>
      )}
    </div>
  );
}
