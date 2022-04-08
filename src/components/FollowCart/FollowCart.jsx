import React, { useContext, useEffect } from "react";
import { fanContext } from "../../context/followContext";
import { List, Button } from "antd";

const FollowCart = () => {
  const { fan, getCart1, deleteFans } = useContext(fanContext);
  useEffect(() => {
    getCart1();
  }, []);

  console.log(fan);
  return (
    <div style={{ margin: "50px auto" }}>
      <div className="containers">
        <List
          itemLayout="vertical"
          dataSource={fan.fans}
          renderItem={(item) => (
            <List.Item extra={<img src={item.item.image} width="300px" />}>
              <List.Item.Meta
                title={<h2>{item.item.name}</h2>}
                description={
                  <>
                    <div>
                      <h4>{item.item.desc}</h4>
                      <Button
                        style={{ marginTop: "10px" }}
                        danger
                        type="text"
                        onClick={() => deleteFans(item.item.id)}
                      >
                        Удалить
                      </Button>
                    </div>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default FollowCart;
