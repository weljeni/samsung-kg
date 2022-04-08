import React, { useEffect } from "react";
import { Carousel } from "antd";
import "./Content.css";

const Content = () => {

  return (
    <>
      <div className="containers">
        <div>
          <Carousel autoplay>
            <div>
              <img
                className="carousel"
                src="https://www.samsungstore.kg/files/media/11/11266.jpg"
                alt="image"
              />
            </div>
            <div>
              <img
                className="carousel"
                src="https://www.samsungstore.kg/files/media/10/10542.png"
                alt="image"
              />
            </div>
            <div>
              <img
                className="carousel"
                src="https://www.samsungstore.kg/files/media/9/9417.png"
                alt="image"
              />
            </div>
            <div>
              <img
                className="carousel"
                src="https://www.samsungstore.kg/files/media/9/9521.png"
                alt="image"
              />
            </div>
          </Carousel>
        </div>
        <img
          className="carousel1"
          src="https://www.samsungstore.kg/files/media/10/10865.jpg"
          alt="image"
        />
        <img
          className="carousel1"
          src="https://www.samsungstore.kg/files/media/6/6817.jpg"
          alt="image"
        />
        <div className="carousel-caption">
          <div className="carousel-cap">
            <h1>Galaxy Z</h1>
            <h4>Призванный изменить форму будущего</h4>
          </div>
          <img
            className="carousel-img"
            src="https://www.samsungstore.kg/files/media/10/10344.jpg"
            alt="image"
          />
        </div>
        <div className="carousel-caption">
          <div className="carousel-cap">
            <h1>Новые планшеты Galaxy Tab S7+</h1>
            <h4>
              Работайте и играйте на новом этапе с потрясающе мощным
              процессором, плавной передачей картинки на дисплей с высокой
              частотой обновления в 120 Гц. Наслаждайтесь новым опытом работы ПК
              с подключенным чехлом-клавиатурой, или воспользуйтесь стилусом S
              Pen с самой низкой задержкой письма.
            </h4>
          </div>
          <img
            className="carousel-img"
            src="https://www.samsungstore.kg/files/media/0/38.jpg"
            alt="image"
          />
        </div>
        <img
          className="carousel1"
          src="https://www.samsungstore.kg/files/media/6/6272.jpg"
          alt="image"
        />
        <div className="carousel-captions">
          <div className="carousel-caps">
            <h1 className="h3s">Galaxy Note</h1>
            <h4 className="h3s">
              Супермощный смартфон, меняющий ваше представление о работе и
              развлечениях
            </h4>
          </div>
          <img
            className="carousel-img"
            src="https://www.samsungstore.kg/files/media/3/3736.jpg"
            alt="image"
          />
        </div>
      </div>
      <div className="container-home">
        <div className="container-house">
          <h3 className="title-h3">Сотрудничество с Samsung в Кыргызстане</h3>
          <img
            src="https://www.samsungstore.kg/static/user/ima/st1.png"
            alt="logo"
          />
        </div>
        <div className="container-house">
          <h3 className="title-h3">Сеть фирменных магазинов в Бишкеке</h3>
          <img
            src="https://www.samsungstore.kg/static/user/ima/st2.png"
            alt="logo"
          />
        </div>
        <div className="container-house">
          <h3 className="title-h3">Мировая гарантия и сервисный центр</h3>
          <img
            src="https://www.samsungstore.kg/static/user/ima/st3.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
