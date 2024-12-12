import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: "Все", // Текущий выбранный жанр
  currentPage: 0,       // Текущая страница
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.selectedGenre = action.payload; // Устанавливаем выбранный жанр
      state.currentPage = 0; // Сбрасываем страницу при смене жанра
    },
    setPage: (state, action) => {
      state.currentPage = action.payload; // Устанавливаем текущую страницу
    },
  },
});

export const { setGenre, setPage } = filterSlice.actions;
export default filterSlice.reducer;
