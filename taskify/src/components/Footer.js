import React from "react";
import { AiFillHeart, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Taskify</span>
        </a>
        <h6 className="text-sm flex flex-row text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2020 Application Microservice créée avec
          <div className="text-red-500 text-xl">
            <AiFillHeart />
          </div>
          par Abdennour, Aguerram, Dariaoui, Elhasnaouy, Elqandili, Sifane et
          Rhazzoul
        </h6>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-gray-500 text-4xl"
            href="https://github.com/butbanksy/dockerization-microservices"
          >
            <AiFillGithub />
          </a>
        </span>
      </div>
    </footer>
  );
}
