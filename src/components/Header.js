import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";
import logo from "../assets/logo.svg";

function Header({ isAuthenticated }) {
  return (
    
    <header className="header">
      <div className="header__els">
      <div className="logo">
      <img src={logo} alt="Логотип" className="logo__image" />
        
        <div className="logo_upper">
        <Link to="/">БИБЛИОТЕЧНАЯ</Link>
        <div className="logo_lower">книжный магазин</div>
        </div>
        
      </div>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/books">Books</Link>
        <Link to="/wishlist">WishList</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/order">My Orders</Link>
      </nav>
      <div className="auth">
        {isAuthenticated ? (
          <>
            <Link to="/profile">Профиль</Link>
            <button onClick={() => console.log("Выход")}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      </div>
    </header>
  );
}

export default Header;
