import React from "react";
import { Card } from "antd";
import { TVS } from ".././../helpers/tvs"
import "./Tv.css";

const { Meta } = Card;

const Tv = () => {
  return (
    <div className="containers">
      <h1 className="titles">Выберите телевизор</h1>
      <div className="tvs">
        {TVS.map((item) => (
          <div className="card-tv">
            <Card
              hoverable
              className="cards"
              cover={
                <img alt="example" className="card-image" src={item.image} />
              }
            >
              <Meta title={item.title} description={item.desc} />
            </Card>
          </div>
        ))}
      </div>
      <div className="qled">
        <img
          className="qled-image"
          src="https://www.samsungstore.kg/files/media/1/1771.webp"
          alt="image"
        />
        <div className="qled-title">
          <h1>QLED 8K</h1>
          <h3>Телевизоры QLED 8K</h3>
        </div>
      </div>
      <div className="qled">
        <img
          className="qled-image"
          src="https://www.samsungstore.kg/files/media/1/1772.webp"
          alt="image"
        />
        <div className="qled-title">
          <h1>Chrystal UHD</h1>
          <h3>Миллиард оттенков в 4K</h3>
        </div>
      </div>
      <div className="qled">
        <img
          className="qled-image"
          src="https://www.samsungstore.kg/files/media/1/1773.webp"
          alt="image"
        />
        <div className="qled-title">
          <h1>Аудио техника</h1>
          <h3>Максимальное качество звукаы</h3>
        </div>
      </div>
    </div>
  );
};

export default Tv;
