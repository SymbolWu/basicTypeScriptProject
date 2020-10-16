import React from "react";
import { Menu } from "antd";
import { Link, withRouter,RouteComponentProps } from "react-router-dom";
import menus from "@/routes/menus";

interface MenuProps extends RouteComponentProps {
  theme?: "dark" | "light" | undefined;
  mode?:
    | "horizontal"
    | "vertical"
    | "vertical-left"
    | "vertical-right"
    | "inline"
    | undefined;
  // location: any;
}
const WrapperMenu: React.FC<MenuProps> = (props) => {
  const {
    location: { pathname },
    theme = "dark",
    mode = "horizontal",
  } = props;
  const targetName: string[] | undefined = menus
    .filter((item) => item.path === pathname)
    .map((t) => t.name);
  return (
    <Menu theme={theme} mode={mode} defaultSelectedKeys={targetName}>
      {menus.map((menu) => (
        <Menu.Item key={menu.name}>
          <Link to={menu.path}>{menu.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default withRouter(WrapperMenu);
