import { Button, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { phoneContext } from "../../context/phoneContext";
import "./EditPhone.css";

const EditPhone = () => {
  const { editOnePhone, editPhone, editsPhone } = useContext(phoneContext);
  const params = useParams();
  const [edit, setEdit] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    editsPhone(params.id);
  }, []);

  useEffect(() => {
    setEdit(editPhone);
  }, [editPhone]);

  
  const handleValue = (e) => {
    let edited = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(edited);
  };

  function save() {
    editOnePhone(params.id, edit);
    navigate("/admin");
    setTimeout(() => {
      message.success("Изменения успешно сохранены!");
    }, 1000);
  }

  return edit ? (
    <div className="edits">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          className="edit-inp"
          type="text"
          value={edit.name}
          onChange={handleValue}
          name="name"
        />
        <input
          className="edit-inp"
          type="text"
          value={edit.image}
          onChange={handleValue}
          name="image"
        />
        <input
          className="edit-inp"
          type="text"
          value={edit.desc}
          onChange={handleValue}
          name="desc"
        />
        <input
          className="edit-inp"
          type="text"
          value={edit.price}
          onChange={handleValue}
          name="price"
        />
        <button className="edit-btn" onClick={save}>
          Сохранить
        </button>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default EditPhone;
