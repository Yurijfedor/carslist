import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from './redux/cars/operations';
import { CarList } from './components/carsList/carsList';
import { SearshInput } from './components/search/searshInput';
import { Pagination } from './components/pagination/pagination';
import { AddCar } from './components/modals/addModal';
import { Button } from './components/buttons/button';
import { ContainerMain } from './components/container/container.styled';
import { Wrapper } from './components/wrappers/topWrapp.styled';

export const App = () => {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
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
    <ContainerMain>
      <Wrapper>
        <SearshInput />
        <Button onClick={handleAdd} text={'Add car'} />
      </Wrapper>
      <CarList perPage={carsPerPage} />
      <Pagination perPage={carsPerPage} />
      <AddCar showAddModal={showAddModal} closeModal={closeModal} />
    </ContainerMain>
  );
};
