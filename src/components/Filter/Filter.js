import { Select, Slider } from "antd";
import React, { useContext } from "react";
import { phoneContext } from "../../context/phoneContext";

const Filter = ({ brand, setBrand, price, setPrice }) => {
  const { phones } = useContext(phoneContext);
  return (
    <div className="filters">
      <Select
        value={brand}
        onChange={(e) => setBrand(e)}
        placeholder="Filter by brand"
        style={{ width: "100%" }}
        allowClear
        mode="multiple"
      >
        {phones.map((item) => (
          <Select.Option key={item.id} value={item.name}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 10000]}
        min={0}
        max={4000}
        step={10}
        range
      />
    </div>
  );
};

export default Filter;
