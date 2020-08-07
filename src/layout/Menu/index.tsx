import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import menus from "@/routes/menus";
const WrapperMenu: React.FC<any> = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["Home"]}>
      {menus.map((menu) => (
        <Menu.Item key={menu.name}>
          <Link to={menu.path}>{menu.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default WrapperMenu;
