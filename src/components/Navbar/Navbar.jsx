import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { ADMIN_EMAIL } from "../helpers/consts";

const Navbar = () => {
  const NAV_BAR = [
    {
      title: "Мобильные устройства",
      link: "/phone",
      id: 1,
    },
    {
      title: "ТВ и аудио",
      link: "/tv",
      id: 2,
    },
    {
      title: "Для дома",
      link: "/for",
      id: 3,
    },
    {
      title: "Отзывы",
      link: "/commit",
      id: 4,
    },
  ];

  const location = useLocation();
  const { currentUser } = useContext(authContext);
  return (
    <div className="navbar">
      {NAV_BAR.map((item) => (
        <Link
          className={
            location.pathname === item.link
              ? "navbar-item-active"
              : "navbar-item"
          }
          key={item.id}
          to={item.link}
        >
          {item.title}
        </Link>
      ))}
      {currentUser === ADMIN_EMAIL ? (
        <Link
          to="/admin"
          className={
            location.pathname === "/admin"
              ? "navbar-item-active"
              : "navbar-item"
          }
        >
          Админ
        </Link>
      ) : null}
    </div>
  );
};

export default Navbar;
