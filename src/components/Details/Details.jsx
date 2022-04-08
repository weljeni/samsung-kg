import { Button, Form, Image, Input, message, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { phoneContext } from "../../context/phoneContext";
import "./Deatails.css";
import DetailsCommit from "./DetailsCommit";

const Details = () => {
  const { editsPhone, editPhone, editOneCommit } = useContext(phoneContext);
  const params = useParams();
  useEffect(() => {
    editsPhone(params.id);
  }, []);
  const { currentUser } = useContext(authContext);

  const [userCommit, setUserCommit] = useState({ comment: "" });

  function addCommit(newCommit) {
    let newCom = {
      ...newCommit,
      user: currentUser,
      id: Date.now(),
    };

    let news = [...editPhone.comments, newCom];
    currentUser
      ? editOneCommit(params.id, news)
      : setTimeout(() =>
          message.warning(
            "Чтобы оставить комментарий нужно зарегистрироваться!"
          )
        );

    setUserCommit("");
  }

  return editPhone ? (
    <>
      <div className="detka containers">
        <div>
          <Image className="imag" src={editPhone.image} />
        </div>
        <div className="details">
          <h1 className="details-min">{editPhone.name}</h1>
          <h3 className="details-min">{editPhone.desc}</h3>
          <h1 className="details-min">{"$" + editPhone.price}</h1>
        </div>
      </div>
      <div className="commit-details">
        <div className="commit-div">
          <Form.Item label="Комментарий">
            <Input.TextArea
              value={userCommit.comment}
              name="comment"
              onChange={(e) =>
                setUserCommit({
                  ...userCommit,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Item>
          {currentUser ? (
            <Button onClick={() => addCommit(userCommit)}>Добавить</Button>
          ) : (
            <Button
              onClick={() =>
                setTimeout(() => {
                  message.warning(
                    "Чтобы оставить комментарий, вам надо зарегистрироваться!"
                  );
                }, 500)
              }
            >
              Добавить
            </Button>
          )}
        </div>
        <div className="div_details">
          <DetailsCommit />
        </div>
      </div>
    </>
  ) : (
    <div className="example">
      <Spin />
    </div>
  );
};

export default Details;
