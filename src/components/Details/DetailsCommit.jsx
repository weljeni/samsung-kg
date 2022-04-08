import React, { useContext, useEffect, useState } from "react";
import { List, message, Avatar, Skeleton, Divider, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { phoneContext } from "../../context/phoneContext";
import { authContext } from "../../context/authContext";
import { useParams } from "react-router-dom";
import { ADMIN_EMAIL } from "../helpers/consts";

const DetailsCommit = () => {
  const { editPhone, editOneCommit } = useContext(phoneContext);
  const { currentUser } = useContext(authContext);
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  function deleteCommit(id) {
    let newCommit = editPhone.comments.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    editOneCommit(params.id, newCommit);
  }
  return (
    <div
      className="div-scroll"
      id="scrollableDiv"
      style={{
        height: 250,
        overflow: "auto",
        padding: "0 10px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
        margin: "20px auto",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={editPhone.comments}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.user}</a>}
                description={item.comment}
              />
              <div className="form-button">
                <div>Комментарий</div>
                {currentUser === ADMIN_EMAIL ? (
                  <Button type="link" onClick={() => deleteCommit(item.id)}>
                    Удалить
                  </Button>
                ) : (
                  <Button
                    type="link"
                    onClick={() =>
                      setTimeout(() => {
                        message.warning(
                          "Только администратор сайта может удалить ваш комментарий!"
                        );
                      }, 500)
                    }
                  >
                    Удалить
                  </Button>
                )}
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default DetailsCommit;
