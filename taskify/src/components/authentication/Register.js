import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_PREFIX } from "../../constants";
import { login } from "../../services/loginAPI";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Créer un compte
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Créez votre compte afin de profiter pleinement des fonctionnalités
              de Taskify!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-col -m-2 mx-auto">
                <div className="p-2 w-1/2 mx-auto">
                  <div className="relative">
                    <label
                      htmlFor="username"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Nom d'utilisateur
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      ref={register}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 mx-auto">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      ref={register}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-12">
                  S'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
