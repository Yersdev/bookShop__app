import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../store/slices/wishlistSlice';

const TestRedux = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items); // Получаем данные из Redux
  const dispatch = useDispatch();

  const addItemToWishlist = () => {
    dispatch(addToWishlist({ id: 1, name: 'Test Item' })); // Отправляем действие в Redux
  };

  return (
    <div>
      <h2>Redux Test</h2>
      <button onClick={addItemToWishlist}>Добавить в избранное</button>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestRedux;
