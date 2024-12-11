import React, { useState, useEffect } from "react";
import "../styles/OrderPage.css";
import bookDefault from "../assets/books.svg"; // Изображение по умолчанию для книг
// Импортируйте другие изображения книг, если они различаются
import book1984 from "../assets/books.svg";
import bookHarryPotter from "../assets/books.svg";
import bookMasterMargarita from "../assets/books.svg";
import bookSherlockHolmes from "../assets/books.svg";

function MyOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: "123456",
      date: "2023-12-11",
      status: "Выполнен",
      total: 1500,
      details: {
        books: [
          { 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },{ 
            title: "1984", 
            author: "Джордж Оруэлл", 
            price: 300, 
            image: book1984 // Используем специфическое изображение
          },
          { 
            title: "Гарри Поттер", 
            author: "Дж. Роулинг", 
            price: 350, 
            image: bookHarryPotter // Используем специфическое изображение
          },
          // Добавьте больше книг при необходимости для тестирования прокрутки
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
          { 
            title: "Мастер и Маргарита", 
            author: "М. Булгаков", 
            price: 400, 
            image: bookMasterMargarita // Используем специфическое изображение
          },
          { 
            title: "Шерлок Холмс", 
            author: "А. Конан Дойл", 
            price: 600, 
            image: bookSherlockHolmes // Используем специфическое изображение
          },
          // Добавьте больше книг при необходимости для тестирования прокрутки
        ],
        address: "ул. Лермонтова, дом 20, кв. 15",
        total: 1000,
      },
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenDetails = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  // Функция для обработки нажатия клавиши Escape
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseDetails();
    }
  };

  // Добавляем обработчик события при открытом модальном окне
  useEffect(() => {
    if (selectedOrder) {
      // Блокируем прокрутку основной страницы при открытом модальном окне
      document.body.style.overflow = 'hidden';
      // Добавляем слушатель события keydown
      window.addEventListener("keydown", handleKeyDown);
    } else {
      // Разрешаем прокрутку основной страницы
      document.body.style.overflow = 'auto';
    }

    // Удаляем слушатель события при размонтировании или изменении selectedOrder
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedOrder]);

  // Функция для закрытия модального окна при клике вне его содержимого
  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      handleCloseDetails();
    }
  };

  return (
    <div className="my-orders">
      <h1>Мои заказы</h1>
      <hr />

      {/* Список заказов */}
      <section className="orders-list">
        <h2>История заказов</h2>
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-summary">
              <span>Номер заказа: {order.orderNumber}</span>
              <span>Дата: {order.date}</span>
              <span>Статус: {order.status}</span>
              <span>Сумма: {order.total} грн</span>
              <button onClick={() => handleOpenDetails(order.id)}>
                Детали
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Модальное окно для деталей заказа */}
      {selectedOrder && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseDetails}>
              ×
            </button>
            <h2>Детали заказа #{selectedOrder.orderNumber}</h2>
            <div className="order-info">
              <h3>Список книг:</h3>
              <ul className="books-list">
                {selectedOrder.details.books.map((book, index) => (
                  <li key={index} className="book-item">
                    <img 
                      src={book.image || bookDefault} 
                      alt={book.title} 
                      className="book-image" 
                    />
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
        </div>
      )}
    </div>
  );
}

export default MyOrders;
