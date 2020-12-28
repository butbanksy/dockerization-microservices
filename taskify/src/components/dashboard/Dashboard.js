import React from "react";
import Chip from "../common/Chip";
import TasksList from "../task/TasksList";
import { useRouteMatch, useParams, Switch, Route, Link } from "react-router-dom";
import CreateTask from "../task/CreateTask";
export default function Dashboard() {
  let match = useRouteMatch();

  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 pt-12 pb-16 mx-auto">
        <Switch>
          <Route path={`${match.path}/create`}>
            <CreateTask />
          </Route>
          <Route path={match.path}>
            <TasksList />
          </Route>
        </Switch>
      </div>
    </section>
  );
}
