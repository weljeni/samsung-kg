import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartCorntext";
import {
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { Badge, Card, message } from "antd";
import { fanContext, followContext } from "../../context/followContext";
import { authContext } from "../../context/authContext";
import { phoneContext } from "../../context/phoneContext";
const { Meta } = Card;

const PhoneCard = ({ item }) => {
  const { currentUser } = useContext(authContext);
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addFans, checkFans } = useContext(fanContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const [like, setLike] = useState(checkFans(item.id));
  const { editOneLike, editPhone, editsPhone, getAllPhones } =
    useContext(phoneContext);

  useEffect(() => {
    getAllPhones();
  }, []);

  function saveLikes() {
    let like = {
      user: currentUser,
      id: Date.now(),
    };
    let userLikes = item.likes.some((elem) => elem.user === currentUser);

    if (userLikes) {
      let filteredLikes = item.likes.filter((item) => {
        return item.user !== currentUser;
      });
      editOneLike(item.id, filteredLikes);
    } else {
      let likes = [...item.likes, like];
      editOneLike(item.id, likes);
    }
  }

  function clickCart() {
    addProductToCart(item);
    setCheckItem(checkItemInCart(item.id));
  }
  function clickFan() {
    addFans(item);
    setLike(checkFans(item.id));
  }

  return (
    <div className="classes">
      <Badge.Ribbon text="Best" color="red">
        <Card
          key={item.id}
          className="card-phone"
          style={{
            width: 300,
            height: 400,
            margin: "0px 20px",
            boxShadow: "0px 0px 2px",
          }}
          cover={
            <img alt="example" style={{ height: "230px" }} src={item.image} />
          }
          actions={[
            <Badge count={item.likes.length}>
              <LikeOutlined
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  currentUser
                    ? saveLikes()
                    : setTimeout(() =>
                        message.warning("Вам надо зарегистрироваться!")
                      )
                }
              />
            </Badge>,
            <HeartOutlined
              key="icon-heart"
              onClick={() =>
                currentUser
                  ? clickFan()
                  : setTimeout(() =>
                      message.warning("Вам надо зарегистрироваться!")
                    )
              }
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: like ? "red" : "black",
              }}
            />,
            <ShoppingCartOutlined
              key="icon-cart"
              onClick={() =>
                currentUser
                  ? clickCart()
                  : setTimeout(() =>
                      message.warning("Вам надо зарегистрироваться!")
                    )
              }
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: checkItem ? "red" : "black",
              }}
            />,
            <Link key="ellipsis" to={`/details/${item.id}`}>
              <EllipsisOutlined style={{ color: "black", fontSize: "22px" }} />
            </Link>,
          ]}
        >
          <Meta title={item.name} description={<h2>{"$" + item.price}</h2>} />
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default PhoneCard;
