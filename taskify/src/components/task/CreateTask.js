import React from "react";

export default function CreateTask() {
  return (
    <div className="mx-auto lg:w-1/3 md:w-1/2 bg-gray-900 shadow rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-white text-3xl mb-4 font-medium title-font">
        Créer une nouvelle tâche
      </h2>
      <div className="relative mb-4">
        <label htmlFor="title" className="leading-7 text-sm text-gray-400">
          Titre
        </label>
        <input
          type="title"
          id="title"
          name="title"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="description"
          className="leading-7 text-sm text-gray-400"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="done"
          className="leading-7 text-sm text-gray-400"
        >
          Marquer la tâche comme finie {"      "}
        </label>
       <input name="done" id="done" type="checkbox"/>
      </div>
      <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
        Créer
      </button>
    </div>
  );
}
