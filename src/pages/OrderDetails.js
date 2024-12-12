import React, { useState } from "react";
import "../styles/OrderPage.css";
import bookicon from "../assets/books.svg"

function MyOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null); // Для хранения текущего заказа

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
          { title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },{ title: "Мастер и Маргарита", author: "М. Булгаков", price: 400, image: "path-to-image-3.jpg" },
          { title: "Шерлок Холмс", author: "А. Конан Дойл", price: 600, image: "path-to-image-4.jpg" },
        ],
        address: "ул. Лермонтова, дом 20, кв. 15",
        total: 1000,
      },
    },
  ];

  const handleOpenDetails = (order) => {
    setSelectedOrder(order); // Устанавливаем текущий заказ
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null); // Возвращаемся к списку заказов
  };

  return (
    <div className="my-orders">
      {!selectedOrder ? (
        // Если заказ не выбран, показываем список заказов
        <>
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
                  <button onClick={() => handleOpenDetails(order)}>Детали</button>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        // Если заказ выбран, показываем его детали
        <div className="order-details">
          <button onClick={handleBackToOrders} className="back-button">Назад</button>
          <h1>Детали заказа #{selectedOrder.orderNumber}</h1>
          <hr />
          <div className="order-info">
            <h3>Список книг:</h3>
            <ul className="books-list">
              {selectedOrder.details.books.map((book, index) => (
                <li key={index} className="book-item">
                  <img src={bookicon} alt={book.title} className="book-image" />
                  <div className="book-details">
                    <span className="book-title">{book.title}</span>
                    <span className="book-author">{book.author}</span>
                    <span className="book-price">{book.price} грн</span>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Адрес доставки:</h3>
            <p>{selectedOrder.details.address}</p>
            <h3>Итоговая сумма:</h3>
            <p>{selectedOrder.details.total} грн</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyOrders;
