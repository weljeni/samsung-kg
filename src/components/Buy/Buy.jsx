import { Form, Input, message } from "antd";
import React, { useState } from "react";
import { Checkbox } from "antd";

import "./Buy.css";
import { useNavigate } from "react-router-dom";

const Buy = () => {
  const navigate = useNavigate();
  const [cod, setCod] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function buy() {
    if (cod.length < 16) {
      return setTimeout(() =>
        message.warning("Количество введенных цифр должно равна 16")
      );
    }
    if (month.length < 2) {
      return setTimeout(() =>
        message.warning("Количество введенных цифр должно равна 2")
      );
    }
    if (year.length < 2) {
      return setTimeout(() =>
        message.warning("Количество введенных цифр должно равна 2")
      );
    }
    if (cvc.length < 3) {
      return setTimeout(() =>
        message.warning("Количество введенных цифр должно равна 3")
      );
    }
    navigate("/success");
  }

  return (
    <div className="buy">
      <div className="buy-block">
        <div className="buy-card">
          <h2>Банковская карта</h2>
          <h4>MasterCard, Maestro, Visa</h4>
        </div>
        <div className="buy-input">
          <Form layout="vertical">
            <Form.Item name="number" label="Банковская карта">
              <Input
                type="number"
                placeholder=""
                value={cod}
                onChange={(e) => setCod(e.target.value)}
              />
            </Form.Item>
          </Form>
        </div>

        <div className="form-cod">
          <Form layout="vertical ">
            <Form.Item name="number" label="Срок действия">
              <div className="form-data">
                <Input
                  placeholder="MM"
                  type="number"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />

                <Input
                  placeholder="ГГ"
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </Form.Item>
          </Form>

          <Form layout="vertical" className="form-kod">
            <Form.Item name="number" label="Код">
              <Input
                placeholder="CVC"
                type="number"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="form-group">
          <Checkbox onChange={onChange}>Запомнить мою карту</Checkbox>
        </div>

        <button className="form-btn" onClick={buy}>
          Оплатить
        </button>
      </div>
    </div>
  );
};

export default Buy;
