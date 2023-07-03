import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectVisibleCars } from '../redux/selectors';
import { EditCar } from './modals/editModal';
import { DeleteCar } from './modals/deleteModal';

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
      <tr key={car.id}>
        <td>{car.car}</td>
        <td>{car.car_model}</td>
        <td>{car.car_vin}</td>
        <td>{car.car_color}</td>
        <td>{car.car_model_year}</td>
        <td>{car.price}</td>
        <td>{car.availability ? 'available' : 'not available'}</td>
        <td>
          <select
            onChange={e =>
              e.target.value === 'edit'
                ? handleEdit(e, car)
                : handleDelete(e, car)
            }
          >
            <option value="">Actions</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
        </td>
      </tr>
    ));
  };

  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Model</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
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
