import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../../redux/cars/carsSlice';
import { ModalBackdrop } from '../modalBackdrop/modalBackdrop';

export const EditCar = ({ item, showEditModal, closeModal }) => {
  const dispatch = useDispatch();
  const {
    id,
    car_color,
    price,
    availability,
    car,
    car_model,
    car_vin,
    car_model_year,
  } = item;
  const [editedCar, setEditedCar] = useState({
    id,
    car_color: car_color || '',
    price: price || '',
    availability: availability || '',
  });

  useEffect(() => {
    setEditedCar({ id, car_color, price, availability });
  }, [id, car_color, price, availability]);

  const handleInputChange = e => {
    e.stopPropagation();
    const { name, value } = e.target;
    setEditedCar(prevCar => ({
      ...prevCar,
      [name]: value,
    }));
  };
  const handleSave = () => {
    console.log(editedCar);
    dispatch(setItems(editedCar));

    closeModal();
  };

  const handleFormClick = e => {
    e.stopPropagation();
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    closeModal();
  };

  return (
    showEditModal && (
      <ModalBackdrop onClose={closeModal}>
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Car</h2>
            <form onClick={handleFormClick} onSubmit={handleFormSubmit}>
              <div>
                <label>
                  Company:
                  <input type="text" value={car} disabled />
                </label>
              </div>
              <div>
                <label>
                  Model:
                  <input type="text" value={car_model} disabled />
                </label>
              </div>
              <div>
                <label>
                  VIN:
                  <input type="text" value={car_vin} disabled />
                </label>
              </div>
              <div>
                <label>
                  Color:
                  <input
                    type="text"
                    name="car_color"
                    value={editedCar.car_color}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Year:
                  <input type="text" value={car_model_year} disabled />
                </label>
              </div>
              <div>
                <label>
                  Price:
                  <input
                    type="text"
                    name="price"
                    value={editedCar.price}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Availability:
                  <input
                    type="text"
                    name="availability"
                    value={editedCar.availability}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <button onClick={handleSave}>Save</button>
              <button onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      </ModalBackdrop>
    )
  );
};
