import React from "react";
import "../styles/BookCard.css"; // Подключаем стили
import books from "../assets/books.svg";


function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={books} alt={book.title} className="book-card__image" />
      <div className="book-card__price">{book.price} грн.</div>
      <div className="book-card__title">{book.title}</div>
      <div className="book-card__author">{book.author}</div>
      <div className="book-card__actions">
        <button className="book-card__btn">В корзину</button>
        <button className="book-card__fav">❤️</button>
      </div>
    </div>
  );
}

export default BookCard;
