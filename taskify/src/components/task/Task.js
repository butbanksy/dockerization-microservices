import React from "react";
import Chip from "../common/Chip";

export default function Task({ title, description, isDone }) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <Chip isDone={isDone} />
        <h2 className="text-lg text-white font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        <button disabled={true} className="flex text-white  border-0 mt-2 py-2 px-2 focus:outline-none hover:bg-gray-600 rounded text-normal">
          Modifier
        </button>
      </div>
    </div>
  );
}
