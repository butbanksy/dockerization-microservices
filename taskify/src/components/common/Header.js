import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../store/authStore";
export default function Header() {
  const [auth, setAuth] = useRecoilState(authAtom);

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
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

          <span className="ml-3 text-xl">
            <Link to="/">Taskify</Link>
          </span>
        </a>
        {!auth?.token ? (
          <>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-white">
                <Link to="/register">S'inscrire</Link>
              </a>
            </nav>
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <Link to="/login">Se connecter</Link>
            </button>
          </>
        ):
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">{auth.username}</nav>
        }
      </div>
    </header>
  );
}
