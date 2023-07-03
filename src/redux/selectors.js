import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectSearshTerm = state => state.filter.searshTerm;

export const selectVisibleCars = createSelector(
  [selectCars, selectSearshTerm],
  (cars, filter) => {
    return cars.filter(item => {
      const { car, car_model, car_vin, car_color, car_model_year, price } =
        item;
      const search = filter.trim().toLowerCase();
      return (
        car.toLowerCase().includes(search) ||
        car_model.toLowerCase().includes(search) ||
        car_vin.toLowerCase().includes(search) ||
        car_color.toLowerCase().includes(search) ||
        car_model_year.toString().includes(search) ||
        price.toString().includes(search)
      );
    });
  }
);
