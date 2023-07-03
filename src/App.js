import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from './redux/cars/operations';
import { CarList } from './components/carsList';
import { SearshInput } from './components/searshInput';
import { selectIsLoading } from './redux/selectors';
import { Pagination } from './components/pagination';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const carsPerPage = 10;

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      {/* <button onClick={() => console.log(selectVisibleCars)}>Get Cars</button> */}
      <SearshInput />
      <CarList perPage={carsPerPage} />
      <Pagination perPage={carsPerPage} />
    </>
  );
};
