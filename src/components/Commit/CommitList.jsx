import React, { useContext, useEffect, useState } from "react";
import { commitContext } from "../../context/contextCommit";
import { List, message, Avatar, Skeleton, Divider, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { ADMIN_EMAIL } from "../helpers/consts";
import { authContext } from "../../context/authContext";

const CommitList = () => {
  const { commit, getCommit, removeCommit } = useContext(commitContext);
  const { currentUser } = useContext(authContext);

  useEffect(() => {
    getCommit();
  }, []);
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
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
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
          dataSource={commit}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src="" />}
                title={<a href="https://ant.design">{item.user}</a>}
                description={item.commits}
              />
              <div className="form-button">
                <div>Комментарий</div>
                {currentUser === ADMIN_EMAIL ? (
                  <Button type="link" onClick={() => removeCommit(item.id)}>
                    Удалить
                  </Button>
                ) : null}
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default CommitList;
