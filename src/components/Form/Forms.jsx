import React, { useState } from "react";
import { Form, Input, InputNumber, Button, message } from "antd";
import "./Forms.css";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();
  const [asim, setAsim] = useState();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  function click() {
    if (!asim) {
      return setTimeout(() => {
        message.warning("Заполните все поля!");
      }, 500);
    }
    navigate("/buy");
  }

  return (
    <div className="forma">
      <h1 className="forms-h1">Заполните форму заказа:</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Ваше имя"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Возраст"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Адресс">
          <Input value={asim} onClick={(e) => setAsim(e.target.value)} />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Комментарий к заказу">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" onClick={click}>
            Перейти к оплате
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forms;
