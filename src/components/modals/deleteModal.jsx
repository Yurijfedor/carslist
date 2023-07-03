import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../../redux/cars/carsSlice';
import { ModalBackdrop } from '../modalBackdrop/modalBackdrop';

export const DeleteCar = ({ item, showDeleteModal, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCar(item.id));
    console.log(item.id);
    closeModal();
  };

  return (
    showDeleteModal && (
      <ModalBackdrop onClose={closeModal}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <h2>Delete Car</h2>
            <p>Are you sure you want to delete this car?</p>
            <p>Car: {item.car}</p>
            <p>VIN: {item.car_vin}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </ModalBackdrop>
    )
  );
};
