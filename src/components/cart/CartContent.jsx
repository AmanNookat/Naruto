import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import {
  changeCountCardsInCart,
  cleanCart,
  createOrder,
  deleteCardFromCart,
} from "../../store/cart/cartActions";

const CartContent = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cart && (
          <>
            {cart.cards.length ? (
              <>
                <table border="2">
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
                            src={card.cardItem.image}
                            alt={card.cardItem.name}
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{card.cardItem.rarity}</td>
                        <td>{card.cardItem.price}</td>
                        <td>
                          <input
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
                <h2>Итого: {cart.totalCost}</h2>
                <button
                  onClick={() => {
                    dispatch(createOrder());
                  }}
                >
                  Заказать
                </button>
                <button
                  onClick={() => {
                    cleanCart();
                    dispatch(getCart());
                  }}
                >
                  Очистить корзину
                </button>
              </>
            ) : (
              <h2>Корзина пуста</h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartContent;
