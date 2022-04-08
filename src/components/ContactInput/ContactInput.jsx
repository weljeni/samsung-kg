import React, { useContext, useState } from "react";
import { phoneContext } from "../../context/phoneContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "./ContactInp.css";

const ContactInput = () => {
  const navigate = useNavigate();
  const { addPhone } = useContext(phoneContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  function save() {
    if (!name || !image || !desc || !price) {
      setTimeout(() => {
        message.warning("Заполните все поля!");
      }, 1000);
      return;
    } else {
      setTimeout(() => {
        message.success("Товар успешно добавлен!");
      }, 1000);
    }
    let newPhone = {
      name,
      image,
      desc,
      price,
      comments: [],
      likes: [],
    };
    addPhone(newPhone);
    navigate("/admin");
    setName("");
    setImage("");
    setPrice("");
    setDesc("");
  }
  return (
    <div className="contacts-inp">
      <div className="addInp">
        <h1 className="title-inp">Добавить новый смартфон</h1>
        <input
          className="inputAdd"
          type="text"
          placeholder="Name Phone"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inputAdd"
          type="text"
          placeholder="Image Phone"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          className="inputAdd"
          type="text"
          placeholder="Description Phone"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className="inputAdd"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={save} className="btn">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default ContactInput;
