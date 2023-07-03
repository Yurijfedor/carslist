import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from './redux/cars/operations';
import { CarList } from './components/carsList';
import { SearshInput } from './components/searshInput';
import { selectIsLoading } from './redux/selectors';
import { Pagination } from './components/pagination';
import { AddCar } from './components/modals/addModal';

export const App = () => {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const carsPerPage = 10;

  useEffect(() => {
    const localeStorageDate = JSON.parse(localStorage.getItem('persist:root'));
    if (!localeStorageDate) {
      dispatch(fetchCars());
    }
  }, [dispatch]);

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  return (
    <>
      <SearshInput />
      <button onClick={handleAdd}>Add car</button>
      <CarList perPage={carsPerPage} />
      <Pagination perPage={carsPerPage} />
      <AddCar showAddModal={showAddModal} closeModal={closeModal} />
    </>
  );
};
