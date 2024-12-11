import React from "react";
import "../styles/BookCard.css";
import books from "../assets/books.svg"

function SaleCard({ book }) {
  return (
    <div className="book-card">
      <img src={books} alt={book.title} className="book-card__image" />
      <div className="book-card__price">
        <span className="sale-card__old-price">{book.oldPrice} грн.</span>
        <span className="sale-card__new-price">{book.price} грн.</span>
      </div>
      <div className="book-card__title">{book.title}</div>
      <div className="book-card__author">{book.author}</div>
      <button className="book-card__btn">В корзину</button>
    </div>
  );
}

export default SaleCard;
