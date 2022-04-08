import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Извините, убедитесь в правильности введенных данных!"
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            На главную
          </Button>
        }
      />
    </div>
  );
};

export default Error404;
