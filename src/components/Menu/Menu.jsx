import React, { useContext, useState } from "react";
import { Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2"];

const Menus = () => {
  const [openKeys, setOpenKeys] = useState(["sub2"]);
  const { currentUser, handleLogout } = useContext(authContext);
  const navigate = useNavigate();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      className="menu"
    >
      <SubMenu
        key="sub1"
        icon={<MenuUnfoldOutlined style={{ color: "black" }} />}
      >
        <Menu.Item>
          {currentUser ? (
            <div className="emails">
              <p onClick={handleLogout}>Выйти</p>
            </div>
          ) : (
            <p onClick={() => navigate("/auth")}>Войти</p>
          )}
        </Menu.Item>
        <Link to="/phone">
          <Menu.Item style={{ color: "black" }} key="1">
            Мобильные устройства
          </Menu.Item>
        </Link>
        <Link to="/tv">
          <Menu.Item style={{ color: "black" }} key="2">
            ТВ и аудио
          </Menu.Item>
        </Link>
        <Link to="/for">
          <Menu.Item style={{ color: "black" }} key="3">
            Для дома
          </Menu.Item>
        </Link>
        <Link to="/admin">
          <Menu.Item style={{ color: "black" }} key="4">
            Админ
          </Menu.Item>
        </Link>
        <Link to="/commit">
          <Menu.Item style={{ color: "black" }} key="4">
            Отзывы
          </Menu.Item>
        </Link>
        <Link to="/contact">
          <Menu.Item style={{ color: "black" }} key="4">
            Контакты
          </Menu.Item>
        </Link>
      </SubMenu>
    </Menu>
  );
};

export default Menus;
