import { Form, Input, Button, Row, Col, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";

const Auth = () => {
  const { handleLogin, handleSignUp, error } = useContext(authContext);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();
  function validatePassword(rule, value, callback) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    if (regex.test(value)) {
      callback();
    } else {
      callback(
        "Пароль должен содержать как минимум одну цифру, одну строчную, одну прописную, 8 из указанных символов."
      );
    }
  }
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    if (isLoginForm) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };

  return (
    <Row className="auth containers">
      <Col span={15}>
        {error ? <Alert description={error} type="error" /> : null}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваше имя пользователя!",
              },
              {
                type: "email",
                message: "Недействительный адрес электронной почты!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите Ваш пароль!",
              },
              {
                validator: validatePassword,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isLoginForm ? "Войти" : "Зарегистрироваться"}
            </Button>
            <br />
            {isLoginForm ? (
              <>
                Or{" "}
                <span onClick={() => setIsLoginForm(false)}>
                  Зарегистрируйтесь сейчас!
                </span>
              </>
            ) : (
              <>
                У вас есть аккаунт?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsLoginForm(true)}
                >
                  Войти
                </span>
              </>
            )}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Auth;
