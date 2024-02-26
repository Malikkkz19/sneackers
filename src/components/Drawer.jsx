import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            height={50}
            width={30}
            className="removeButtonDrawer"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        <div className="items">
          <div className="cartItem ">
            <div
              className="cartItemImg"
              style={{ backgroundImage: `url(/img/sneakers/2.jpg)` }}
            ></div>
            <div className="cartDesc">
              <p className="mb-0">Мужские кроссовки Nike Air Max 750</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeButton"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className="cartItem ">
            <div
              className="cartItemImg"
              style={{ backgroundImage: `url(/img/sneakers/9.jpg)` }}
            ></div>
            <div className="cartDesc">
              <p className="mb-0">Мужские кроссовки Nike Air Max 750</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeButton"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className="cartItem ">
            <div
              className="cartItemImg"
              style={{ backgroundImage: `url(/img/sneakers/10.jpg)` }}
            ></div>
            <div className="cartDesc">
              <p className="mb-0">Мужские кроссовки Nike Air Max 750</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeButton"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>

          <div className="cartItem ">
            <div
              className="cartItemImg"
              style={{ backgroundImage: `url(/img/sneakers/4.jpg)` }}
            ></div>
            <div className="cartDesc">
              <p className="mb-0">Мужские кроссовки Nike Air Max 750</p>
              <b>9 999 руб.</b>
            </div>
            <img
              className="removeButton"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        </div>
        <div className="cartBottomDesc">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button>
            Оформить заказ <img src="/img/arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
