import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import MyOrders from "./pages/MyOrders";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;