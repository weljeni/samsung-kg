import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/cartCorntext";
import { List, Button, InputNumber } from "antd";
import { Link } from "react-router-dom";

const CartPhone = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);
  return (
    <div className="containers">
      <div style={{ width: "100%", maxWidth: "80%", margin: "0 auto" }}>
        <List
          itemLayout="horizontal"
          dataSource={cart.products}
          footer={<h2>Total: {cart.totalPrice}$</h2>}
          renderItem={(item) => (
            <List.Item
              extra={<img src={item.item.image} alt="img" width={272} />}
            >
              <List.Item.Meta
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h3>{item.item.name}</h3>
                    </div>
                    <h3>{"$" + item.item.price}</h3>
                  </div>
                }
                description={
                  <>
                    <div>{item.item.desc}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "40%",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <h4>Quantity</h4>
                        <Button
                          onClick={() =>
                            changeProductCount(item.count - 1, item.item.id)
                          }
                        >
                          -
                        </Button>
                        <InputNumber disabled value={item.count} />
                        <Button
                          onClick={() =>
                            changeProductCount(item.count + 1, item.item.id)
                          }
                        >
                          +
                        </Button>
                      </div>
                      <div>
                        <h4>SubPrice</h4>
                        <h3>{"$" + item.subPrice}</h3>
                      </div>
                    </div>
                    <div className="bitn">
                      <Button
                        danger
                        type="text"
                        onClick={() => deleteFromCart(item.item.id)}
                      >
                        Удалить
                      </Button>
                      <Link to="/form">
                        <Button type="dashed">Купить</Button>
                      </Link>
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

export default CartPhone;
