import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AddPhone = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 0px" }}
    >
      <Link to="/add">
        <Button type="primary">Добавить</Button>
      </Link>
    </div>
  );
};

export default AddPhone;
