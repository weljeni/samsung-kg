import { Button } from "antd";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { cartContext } from "../../context/cartCorntext";
import { fanContext, followContext } from "../../context/followContext";
import Contacts from "../helpers/Contacts";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { currentUser, handleLogout } = useContext(authContext);
  const navigate = useNavigate();

  const { cartLength } = useContext(cartContext);
  const { cartFan } = useContext(fanContext);

  return (
    <>
      <div className="headers">
        <Link to="/">
          <img
            className="logotype2"
            src="https://www.samsungstore.kg/static/user/ima/logo.png"
            alt="logo"
          />
        </Link>
        <div className="header">
          <Link to="/">
            <img
              className="logotype"
              src="https://www.samsungstore.kg/static/user/ima/logo.png"
              alt="logo"
            />
          </Link>

          <Navbar />
          <div className="div">
            <Menu />
            <Link to="/">
              <img
                className="logotype1"
                src="https://www.samsungstore.kg/static/user/ima/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <Link to="/like">
            <Badge count={+cartFan}>
              <HeartOutlined className="heart" />
            </Badge>
          </Link>
          <Link to="/cart">
            <Badge count={+cartLength} style={{ border: "50%", width: "5px" }}>
              <ShoppingCartOutlined className="shopping" />
            </Badge>
          </Link>
          <div className="out">
            {currentUser ? (
              <div className="email">
                {" "}
                <span>{currentUser}</span>
                <Button className="alsu" onClick={handleLogout}>
                  Выйти
                </Button>
              </div>
            ) : (
              <Button className="Azim" onClick={() => navigate("/auth")}>
                Войти
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
