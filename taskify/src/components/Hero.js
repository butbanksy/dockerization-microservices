import React from "react";

export default function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            Dockerization
            <br className="hidden lg:inline-block" />
            des microservices.
          </h1>
          <p className="mb-8 leading-relaxed font-normal text-lg">
            Vous voulez gérer vos taches en toute efficacité?
            <br className="hidden lg:inline-block" />
            Utilisez l'application Taskify pour la bonne gestion de vos tâches,
            et plus!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white font-semibold bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Créer mon compte
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-scale-down rounded animate-bounce w-3/4"
            alt="hero"
            src="https://cdn.iconscout.com/icon/free/png-512/docker-226091.png"
          />
        </div>
      </div>
    </section>
  );
}
