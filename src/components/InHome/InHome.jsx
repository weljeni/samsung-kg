import React from "react";
import "./InHome.css";

const InHome = () => {
  return (
    <div className="containers">
      <div className="in-home">
        <img
          className="cold"
          src="https://www.samsungstore.kg/files/media/0/48.jpg"
          alt="image"
        />
        <div className="home">
          <h1 className="aaas"> Холодильники</h1>
          <h4 className="aaas">
            Непревзойденная свежесть В вашем холодильнике всегда свежий и
            влажный воздух
          </h4>
        </div>
      </div>
      <div className="stiralka">
        <h1>Стиральные машины</h1>
        <h3>Инновации в стирке</h3>
        <h4>
          Наши стиральные машины наделены множеством инновационных функций и
          используют уникальную технологию стирки, которая позволит сэкономить
          ваши силы и время
        </h4>
        <img
          className="stirka-img"
          src="https://www.samsungstore.kg/files/media/0/238.png"
          alt="image"
        />
      </div>
      <div className="pylesos">
        <div className="pylesos-title">
          <h1>Пылесосы </h1>
          <h3>Легкая уборка. Мощный результат </h3>
          <h4>
            Турбина Anti-Tangle не дает пыли и мусору забивать фильтр и
            препятствовать прохождению воздуха. Турбина Anti-Tangle
            предотвращает наматывание волос и шерсти на детали пылесоса
          </h4>
        </div>
        <img
          className="vse-oni"
          src="https://www.samsungstore.kg/files/media/0/887.jpg"
          alt="image"
        />
      </div>
      <div className="pylesos">
        <div className="pylesos-title">
          <h1>Микроволновые печи </h1>
          <h3> Новые возможности для великолепного вкуса </h3>
          <h4>
            Микроволновые печи Samsung с инновационными функциями и стильным
            дизайном приятно удивят вас своими возможностями и с легкостью
            справятся с любым кулинарным запросом.
          </h4>
        </div>
        <img
          className="vse-oni"
          src="https://www.samsungstore.kg/files/media/0/245.png"
          alt="image"
        />
      </div>
      <div className="pylesos">
        <div className="pylesos-title">
          <h1>Кондиционеры </h1>
          <h3>Оптимальное решение</h3>
          <h4>
            Кондиционер Samsung был разработан специально для достижения
            отменной эффективности. Его уникальный дизайн, современные
            технологии и функциональность обеспечат высочайшее качество воздуха.
          </h4>
        </div>
        <img
          className="vse-oni"
          src="https://www.samsungstore.kg/files/media/0/747.png"
          alt="image"
        />
      </div>
      <img
        style={{ width: "100%", maxWidth: "100%" }}
        src="https://www.samsungstore.kg/files/media/6/6371.png"
        alt="image"
      />
    </div>
  );
};

export default InHome;
