import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderPage.css";

function MyOrders() {
  const navigate = useNavigate(); // Используем navigate для перенаправления

  const orders = [
    {
      id: 1,
      orderNumber: "123456",
      date: "2023-12-11",
      status: "Выполнен",
      total: 1500,
      details: {
        books: [
          { title: "1984", author: "Джордж Оруэлл", price: 300, image: "path-to-image-1.jpg" },
          { title: "Гарри Поттер", author: "Дж. Роулинг", price: 350, image: "path-to-image-2.jpg" },
        ],
        address: "ул. Пушкина, дом 10, кв. 5",
        total: 1500,
      },
    },
    {
      id: 2,
      orderNumber: "654321",
      date: "2023-12-10",
      status: "Обрабатывается",
      total: 1000,
      details: {
        books: [
          { title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },
          { title: "Шерлок Холмс", author: "А. Конан Дойл", price: 600, image: "path-to-image-4.jpg" },
        ],
        address: "ул. Лермонтова, дом 20, кв. 15",
        total: 1000,
      },
    },
  ];

  const handleOpenDetails = (orderId) => {
    navigate(`/order/${orderId}`); // Перенаправляем на страницу деталей заказа
  };

  return (
    <div className="my-orders">
      <h1>Мои заказы</h1>
      <hr />

      <section className="orders-list">
        <h2>История заказов</h2>
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-summary">
              <span>Номер заказа: {order.orderNumber}</span>
              <span>Дата: {order.date}</span>
              <span>Статус: {order.status}</span>
              <span>Сумма: {order.total} грн</span>
              <button onClick={() => handleOpenDetails(order.id)}>Детали</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MyOrders;
