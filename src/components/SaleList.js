import React from "react";
import SaleCard from "./SaleCard";
import "../styles/BookList.css";

function SaleList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <SaleCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default SaleList;
