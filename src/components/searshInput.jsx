import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/cars/filterSlice';
import { setCurrentPage } from '../redux/cars/carsSlice';

export const SearshInput = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    dispatch(setFilter(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};
