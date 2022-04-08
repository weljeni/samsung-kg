import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title="Покупка прошла успешно!"
        subTitle="Ваш заказ принят. Мы доставим вам его в течении 2 рабочих дней!"
        extra={
          <Button
            type="primary"
            key="console"
            onClick={() => navigate("/cart")}
          >
            В корзину
          </Button>
        }
      />
    </div>
  );
};

export default Success;
