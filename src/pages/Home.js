import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import "../styles/Home.css";
import "../styles/footer.css"

function Home() {
  const [currentPage, setCurrentPage] = useState(0); // Для отслеживания текущей страницы
  const [selectedGenre, setSelectedGenre] = useState("Все"); // Для фильтрации по жанру

  const genres = ["Все", "Фантастика", "Саморазвитие", "Детективы", "Детские", "Романы", "Другие"];

  const books = [
    { id: 1, title: "Порядок в Хаосе", genre: "Саморазвитие", author: "Константин Коптелов", price: 300, image: "path-to-image-1.jpg" },
    { id: 2, title: "Смарагдовая книга", genre: "Фантастика", author: "Керстин Гир", price: 225, image: "path-to-image-2.jpg" },
    { id: 3, title: "Зося в зоопарке", genre: "Детские", author: "Агнешка Тышка", price: 86, image: "path-to-image-3.jpg" },
    { id: 4, title: "Мотиватор", genre: "Саморазвитие", author: "Наталья Зотова", price: 214, image: "path-to-image-4.jpg" },
    { id: 5, title: "Без маски", genre: "Другие", author: "Михаил Бурняшев", price: 778, image: "path-to-image-5.jpg" },
    { id: 6, title: "1984", genre: "Фантастика", author: "Джордж Оруэлл", price: 300, image: "path-to-image-6.jpg" },
    { id: 7, title: "Гарри Поттер", genre: "Фантастика", author: "Дж. Роулинг", price: 350, image: "path-to-image-7.jpg" },
    { id: 8, title: "Мастер и Маргарита", genre: "Романы", author: "М. Булгаков", price: 400, image: "path-to-image-8.jpg" },
    { id: 9, title: "Шерлок Холмс", genre: "Детективы", author: "А. Конан Дойл", price: 280, image: "path-to-image-9.jpg" },
    { id: 10, title: "Муми-тролли", genre: "Детские", author: "Т. Янссон", price: 150, image: "path-to-image-10.jpg" },
  ];

  const saleBooks= [
    { id: 1, title: "Порядок в Хаосе", genre: "Саморазвитие", author: "Константин Коптелов", price: 300, image: "path-to-image-1.jpg" },
    { id: 2, title: "Смарагдовая книга", genre: "Фантастика", author: "Керстин Гир", price: 225, image: "path-to-image-2.jpg" },
    { id: 3, title: "Зося в зоопарке", genre: "Детские", author: "Агнешка Тышка", price: 86, image: "path-to-image-3.jpg" },
    { id: 4, title: "Мотиватор", genre: "Саморазвитие", author: "Наталья Зотова", price: 214, image: "path-to-image-4.jpg" },
    { id: 5, title: "Без маски", genre: "Другие", author: "Михаил Бурняшев", price: 778, image: "path-to-image-5.jpg" }
  ];

  const booksPerPage = 5; // Сколько книг показывать на одной странице

  // Фильтрация книг по жанру
  const filteredBooks = selectedGenre === "Все" ? books : books.filter((book) => book.genre === selectedGenre);

  // Пагинация
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    currentPage * booksPerPage,
    currentPage * booksPerPage + booksPerPage
  );

  // Управление переключением страниц
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Управление выбором жанра
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(0); // Сбросить на первую страницу при смене жанра
  };

  return (
    <div>
      <section className="banner">
        <h1>Книги от А до Я</h1>
        <p>
          В нашем магазине можно найти книги на любой вкус. Большой ассортимент,
          приятные цены, интересные сюжеты.
        </p>
        <Link to="/books" className="btn">Перейти в каталог</Link>
      </section>

      <section className="hot-books">
        <div className="hot-books__genre">
          <h2>Горячие поступления</h2>
          <div className="genre-filter">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreChange(genre)}
                className={`genre-button ${selectedGenre === genre ? "active" : ""}`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="hot-books__list">
          <button onClick={handlePrev} disabled={currentPage === 0} className="scroll-btn">
            ←
          </button>
          <BookList books={paginatedBooks} />
          <button onClick={handleNext} disabled={currentPage === totalPages - 1} className="scroll-btn">
            →
          </button>
        </div>
      </section>

      <section className="hot-books">
  <div className="hot-books__genre">
    <h2>Распродажа</h2>
  </div>

  <BookList books={saleBooks} />
</section>
<footer class="footer">
  <section class="about">
    <h2>О магазине</h2>
    <div class="stats">
      <div class="stat">
        <span class="stat-number">35</span>
        <p>Филиалов по всей стране</p>
      </div>
      <div class="stat">
        <span class="stat-number">898</span>
        <p>Товаров в каталоге</p>
      </div>
      <div class="stat">
        <span class="stat-number">8659</span>
        <p>Покупателей</p>
      </div>
      <div class="stat">
        <span class="stat-number">72</span>
        <p>Часов доставка по городам</p>
      </div>
    </div>
  </section>

  <section class="delivery">
    <h2>Доставка</h2>
    <p>
      Работаем без праздников и выходных! Жители Киева могут получить заказ уже в день его оформления. Клиенты из других городов Украины могут получить заказ в течение 1-5 дней в зависимости от местонахождения населенного пункта и выбранного способа доставки. Заказы на сумму свыше 1000 грн доставляются бесплатно!
      <br />
      Доступные способы, точные сроки и стоимость доставки вы можете узнать во время оформления заказа в корзине заказа, после выбора города доставки.
      <br />
      <a href="#" class="details-link">Подробнее</a>

    </p>
  </section>

  <section class="social">
    <h2>Следите за нами в социальных сетях</h2>
    <div class="social-icons">
      <a href="#"><i class="icon-facebook"></i></a>
      <a href="#"><i class="icon-twitter"></i></a>
      <a href="#"><i class="icon-vk"></i></a>
      <a href="#"><i class="icon-youtube"></i></a>
      <a href="#"><i class="icon-instagram"></i></a>
    </div>
  </section>

  <div class="footer-bottom">
    
    <div class="footer-links">
      <div class="column">
        <h3>Популярное</h3>
        <a href="#">Программирование</a>
        <a href="#">Книги для детей</a>
        <a href="#">Психология</a>
        <a href="#">Бизнес</a>
      </div>
      <div class="column">
        <h3>Информация</h3>
        <a href="#">Доставка</a>
        <a href="#">Оплата</a>
        <a href="#">О магазине</a>
      </div>
      <div class="column">
        <h3>Помощь</h3>
        <a href="#">Контакты</a>
        <a href="#">Возврат товара</a>
        <a href="#">Помощь покупателю</a>
      </div>
    </div>
    <div class="contact">
      <span>+8 (707) 139-16-26</span>
      <button class="callback-button">Заказать звонок</button>
    </div>
  </div>
  <div class="footer-legal">
    <p>Все права защищены © 2003-2021 БИБЛИОТЕЧНАЯ</p>
    <p><a href="#">Условия использования</a> | <a href="#">Политика конфиденциальности</a></p>
  </div>
</footer>

    </div>
  );
}



export default Home;
