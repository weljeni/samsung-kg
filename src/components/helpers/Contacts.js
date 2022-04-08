import React from "react";
import { Link, useLocation } from "react-router-dom";

const Contacts = () => {
  const NVA_ITEM = [
    {
      title: "Контакты",
      link: "/contact",
      id: 1,
    },
  ];
  const location = useLocation();
  return (
    <div>
      {NVA_ITEM.map((item) => (
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
    </div>
  );
};

export default Contacts;
