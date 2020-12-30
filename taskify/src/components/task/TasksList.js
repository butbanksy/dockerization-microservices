import React from "react";
import Task from "./Task";
import { Link, useHistory } from "react-router-dom";
import { useData } from "../../utils/useData";
import { useRecoilState } from "recoil";
import { authAtom } from "../store/authStore";

export default function TasksList() {
  const { call, loading, data, status } = useData();
  const [auth, setAuth] = useRecoilState(authAtom);

  const [list, setList] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    setList(data || []);
  }, [data]);

  React.useEffect(() => {
    if (status && status === 401) {
      setAuth({
        token: null,
      });
    }
  }, [status]);

  React.useEffect(() => {
    call({
      link: "/tasks",
      isTaskAPI: true,
    });
  }, []);

  React.useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <>
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-6xl font-medium title-font mb-2 text-white">
          Mes tâches
        </h1>
      </div>
      <Link to="/dashboard/create">
        <button className="inline-flex text-white font-semibold bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-sm my-5">
          Créer une nouvelle tâche
        </button>
      </Link>
      <div className="flex flex-wrap -m-4">
        {list.map((e) => (
          <Task
            key={e.id}
            title={e.title}
            description={e.desc}
            isDone={e.done}
          />
        ))}
      </div>
    </>
  );
}
