import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectVisibleCars } from '../../redux/selectors';
import { EditCar } from '../modals/editModal';
import { DeleteCar } from '../modals/deleteModal';
import {
  CarListTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  SelectStyled,
  OptionStyled,
} from './carsList.styled';

export const CarList = ({ perPage }) => {
  const carsList = useSelector(selectVisibleCars);
  const currentPage = useSelector(selectCurrentPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentCars = carsList.slice(startIndex, endIndex);
  const [selectedCar, setSelectedCar] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = (e, car) => {
    setSelectedCar(car);
    setShowEditModal(true);
    e.target.value = '';
  };

  const handleDelete = (e, car) => {
    setSelectedCar(car);
    setShowDeleteModal(true);
    e.target.value = '';
  };

  const renderTableRows = () => {
    return currentCars.map(car => (
      <TableRow key={car.id}>
        <TableCell>{car.car}</TableCell>
        <TableCell>{car.car_model}</TableCell>
        <TableCell>{car.car_vin}</TableCell>
        <TableCell>{car.car_color}</TableCell>
        <TableCell>{car.car_model_year}</TableCell>
        <TableCell>{car.price}</TableCell>
        <TableCell availability={car.availability}>
          {car.availability ? 'available' : 'not available'}
        </TableCell>
        <TableCell>
          <SelectStyled
            onChange={e =>
              e.target.value === 'edit'
                ? handleEdit(e, car)
                : handleDelete(e, car)
            }
          >
            <OptionStyled value="">Actions</OptionStyled>
            <OptionStyled value="edit">Edit</OptionStyled>
            <OptionStyled value="delete">Delete</OptionStyled>
          </SelectStyled>
        </TableCell>
      </TableRow>
    ));
  };

  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <div>
      <CarListTable>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell>Model</TableHeaderCell>
            <TableHeaderCell>VIN</TableHeaderCell>
            <TableHeaderCell>Color</TableHeaderCell>
            <TableHeaderCell>Year</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Availability</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableRows()}</TableBody>
      </CarListTable>
      <EditCar
        item={selectedCar}
        showEditModal={showEditModal}
        closeModal={closeModal}
      />
      <DeleteCar
        item={selectedCar}
        showDeleteModal={showDeleteModal}
        closeModal={closeModal}
      />
    </div>
  );
};
