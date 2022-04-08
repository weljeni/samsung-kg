import React, { useContext, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { commitContext } from "../../context/contextCommit";
import "./Commit.css";
import CommitList from "./CommitList";
import { authContext } from "../../context/authContext";

const Commit = () => {
  const { currentUser } = useContext(authContext);
  const { addCommit } = useContext(commitContext);
  const [commits, setCommits] = useState("");
  const [user, setUser] = useState("");

  function addComm() {
    const newCommit = {
      commits,
      user: currentUser,
    };
    addCommit(newCommit);

    setTimeout(() => {
      message.success("Комментарий добавлен!");
    });

    setCommits("");
    setUser("");
  }

  return (
    <div className="containers">
      <div className="container-commit">
        <div className="commit-title">
          <h1>Отзывы наших клиентов</h1>
          <h3>
            Мы будем рады каждому вашему отзыву. Это поможет нам сделать наш
            сайт еще лучше.
          </h3>
        </div>

        <div className="commit-input">
          <Form className="form-form">
            {/* <Form.Item label="Ваше имя">
              <Input value={user} onChange={(e) => setUser(e.target.value)} />
            </Form.Item> */}
            <Form.Item label="Комментарий">
              <Input.TextArea
                value={commits}
                onChange={(e) => setCommits(e.target.value)}
              />
            </Form.Item>
          </Form>
          <div className="commit-btn">
            {currentUser ? (
              <Button onClick={addComm}>Опубликовать</Button>
            ) : (
              <Button
                onClick={() =>
                  setTimeout(() => {
                    message.warning(
                      "Чтобы оставить отзыв, вам надо зарегистрироваться!"
                    );
                  }, 500)
                }
              >
                Опубликовать
              </Button>
            )}
          </div>
        </div>
      </div>
      <div style={{ margin: "20px auto" }}>
        <CommitList />
      </div>
    </div>
  );
};

export default Commit;
