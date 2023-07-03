import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentPage } from '../../redux/selectors';
import { selectVisibleCars } from '../../redux/selectors';
import { setCurrentPage } from '../../redux/cars/carsSlice';
import { Button } from '../buttons/button';
import { Wrapper } from '../wrappers/topWrapp.styled';

export const Pagination = ({ perPage }) => {
  const dispatch = useDispatch();
  const carsList = useSelector(selectVisibleCars);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = Math.ceil(carsList.length / perPage);

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = currentPage - 5; i <= currentPage + 5; i++) {
      (i !== 0) & (i > 0) & (i < totalPages) && pageNumbers.push(i);
    }

    return pageNumbers.map(number => (
      <Button
        key={number}
        className={currentPage === number ? 'active' : ''}
        onClick={() => handlePageChange(number)}
        text={number}
      />
    ));
  };
  return (
    <Wrapper>
      <Button
        disabled={currentPage === 1 || totalPages < 10}
        onClick={() => handlePageChange(currentPage - 1)}
        text={'Previous'}
      />

      {renderPagination()}
      <Button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        text={'Next'}
      />
    </Wrapper>
  );
};
