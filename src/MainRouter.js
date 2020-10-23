import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import entry from "./user/entry";
import task from "./user/task";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/entry" component={entry} />
        <Route exact path="/task" component={task} />
      </Switch>
    </div>
  );
};

export default MainRouter;
