import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import {
  changeCountCardsInCart,
  cleanCart,
  createOrder,
  deleteCardFromCart,
} from "../../store/cart/cartActions";
import PaymentForm from "../ui/PaymentForm/PaymentForm";
import { useState } from "react";
import "./CartContent.css";

const CartContent = () => {
  const [modal, setModal] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="cart-container">
      {cart && (
        <>
          {cart.cards.length ? (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Изображение</th>
                    <th>Редкость</th>
                    <th>Цена (1 шт.)</th>
                    <th>Кол-во</th>
                    <th>Итого</th>
                    <th>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cards.map((card) => (
                    <tr key={`cart${card.cardItem.id}`}>
                      <td>{card.cardItem.name}</td>
                      <td>
                        <img
                          className="cart-image"
                          src={card.cardItem.image}
                          alt={card.cardItem.name}
                        />
                      </td>
                      <td>{card.cardItem.rarity}</td>
                      <td>{card.cardItem.price}</td>
                      <td>
                        <input
                          className="cart-input"
                          type="number"
                          value={card.count}
                          onChange={(e) => {
                            changeCountCardsInCart(
                              card.cardItem.id,
                              +e.target.value
                            );
                            dispatch(getCart());
                          }}
                        />
                      </td>
                      <td>{card.totalPrice}</td>
                      <td>
                        <button
                          className="cart-button"
                          onClick={() => {
                            deleteCardFromCart(card.cardItem.id);
                            dispatch(getCart());
                          }}
                        >
                          Удалить
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="cart-total">Итого: {cart.totalCost}</h2>
              <button
                className="cart-button"
                onClick={() => {
                  setModal(true);
                }}
              >
                Заказать
              </button>
              <button
                className="cart-button"
                onClick={() => {
                  cleanCart();
                  dispatch(getCart());
                }}
              >
                Очистить корзину
              </button>
            </>
          ) : (
            <h2 className="cart-empty-message">Корзина пуста</h2>
          )}
        </>
      )}
      {modal && (
        <div className="modal-overlay">
          <div className="payment-form-container">
            <button
              className="modal-close-button"
              onClick={() => {
                setModal(false);
              }}
            >
              &times;
            </button>
            <PaymentForm setModal={setModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
