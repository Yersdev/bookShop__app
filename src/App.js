import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import MyOrders from "./pages/MyOrders";
import Profile from "./pages/Profile";
import OrderDetails from "./pages/OrderDetails"; // Импортируем новую страницу

function App() {
  return (
    <div>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/order" element={<MyOrders />} />
        <Route path="/order/:orderId" element={<OrderDetails />} /> {/* Новый маршрут */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
