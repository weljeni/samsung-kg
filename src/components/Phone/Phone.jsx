import React, { useContext, useEffect, useState } from "react";
import { phoneContext } from "../../context/phoneContext";
import { Card, Empty, Input, Pagination } from "antd";
import "./Phone.css";

import { useSearchParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";
import Filter from "../Filter/Filter";
import { FileSearchOutlined } from "@ant-design/icons";

const Phone = () => {
  const { phones, getAllPhones, countPhone } = useContext(phoneContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(8);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([1, 4000]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    getAllPhones();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: limit,
    });
  }, [search, page, limit, brand, price]);
  useEffect(() => {
    getAllPhones();
  }, [searchParams]);

  return (
    <div className="list-phones">
      <div className="list-inp">
        <Input.Search
          placeholder="Search..."
          className="sea"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "10px auto",
          cursor: "pointer",
          width: "100%",
          maxWidth: "200px",
        }}
        onClick={() => setShow(!show)}
      >
        {show ? (
          <FileSearchOutlined style={{ fontSize: "30px", color: "blue" }} />
        ) : (
          <FileSearchOutlined
            style={{ fontSize: "30px", textAlign: "center", color: "blue" }}
          />
        )}
      </div>
      {show ? (
        <div className="list-filter">
          <Filter
            brand={brand}
            setBrand={setBrand}
            price={price}
            setPrice={setPrice}
          />
        </div>
      ) : null}
      <div className="products-list">
        {phones.length > 0 ? (
          phones.map((item) => <PhoneCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
      <Pagination
        style={{ margin: "50px 0px", textAlign: "center" }}
        total={+countPhone}
        current={+page}
        pageSize={+limit}
        defaultCurrent={1}
        onChange={(page, limit) => {
          setPage(page);
          setLimit(limit);
        }}
      />
    </div>
  );
};

export default Phone;
