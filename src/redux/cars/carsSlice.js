import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsInitialState = {
  items: [],
  currentPage: 1,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setItems(state, action) {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
      state.items = updatedItems;
    },
    deleteCar(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addCar(state, action) {
      state.items = [action.payload, ...state.items];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.cars;
      })
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, setItems, deleteCar, addCar } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
