import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useData} from "../../utils/useData";


export default function Register() {
    const {register, handleSubmit,reset} = useForm();
    const {call, loading, data, error, status,success} = useData()


    useEffect(() => {
        if(success)
        {
            reset({
                username:"",
                password:""
            })
        }
    }, [success]);

    useEffect(()=>{
    },[status])


    const onSubmit = (data) => {
        if (data.username?.length > 0 && data.password?.length > 0)
            call({
                link: "/register",
                data,
                method: "POST"
            })
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
                        {
                            error  && error.errors &&
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-red-600 bg-red-100 p-5">
                                <ul>
                                    {
                                        Object.keys(error.errors).map(key=>{
                                            return error.errors[key].map(e=>{
                                                return <li>{e}</li>
                                            })
                                        })
                                    }
                                </ul>
                            </p>
                        }
                        {
                            error && status === 500 && <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-red-600 bg-red-100 p-5">
                                Username already taken
                            </p>
                        }
                        {
                            success &&<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-green-600 bg-green-100 p-5">
                                Your account has been created successfully
                            </p>
                            }
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
                                <button
                                    disabled={loading}
                                    className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-12">
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
