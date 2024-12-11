import React from "react";

function Books() {
  return (
    <div>
      <h1>Книги</h1>
      {/* Строка поиска */}
      <input type="text" placeholder="Поиск книг" />
      {/* Фильтры */}
      <div className="filters">
        <button>Фантастика</button>
        <button>Детективы</button>
        <button>Детские</button>
      </div>
      {/* Карточки книг */}
      <div className="book-list">
        {/* Компонент BookCard для каждой книги */}
      </div>
    </div>
  );
}

export default Books;
