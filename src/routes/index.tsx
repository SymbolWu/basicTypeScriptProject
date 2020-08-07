import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import menus from "./menus";

export default function Routes() {
  return (
    <Switch>
      {menus.map((menu: { path: string; component?: any }) => (
        <Route
          exact
          key={menu.path}
          path={menu.path}
          component={menu.component}
        />
      ))}
    </Switch>
  );
}
