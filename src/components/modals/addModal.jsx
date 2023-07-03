import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCar } from '../../redux/cars/carsSlice';
import { ModalBackdrop } from '../modalBackdrop/modalBackdrop';

export const AddCar = ({ showAddModal, closeModal }) => {
  const dispatch = useDispatch();

  const [newCar, setNewCar] = useState({
    id: uuidv4(),
    car: '',
    car_model: '',
    car_vin: '',
    car_color: '',
    car_model_year: '',
    price: '',
    availability: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewCar(prevCar => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    dispatch(addCar(newCar));
    closeModal();
    console.log(newCar);
  };

  return (
    showAddModal && (
      <ModalBackdrop onClose={closeModal}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <h2>Add Car</h2>
            <form>
              <div>
                <label>
                  Company:
                  <input
                    type="text"
                    name="car"
                    value={newCar.company}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Model:
                  <input
                    type="text"
                    name="car_model"
                    value={newCar.model}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  VIN:
                  <input
                    type="text"
                    name="car_vin"
                    value={newCar.vin}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Color:
                  <input
                    type="text"
                    name="car_color"
                    value={newCar.color}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Year:
                  <input
                    type="text"
                    name="car_model_year"
                    value={newCar.year}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Price:
                  <input
                    type="text"
                    name="price"
                    value={newCar.price}
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
                    value={newCar.availability}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </form>
            <button onClick={handleAdd}>Add</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </ModalBackdrop>
    )
  );
};
