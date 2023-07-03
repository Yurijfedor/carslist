import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCar } from '../../redux/cars/carsSlice';
import { ModalBackdrop } from '../modalBackdrop/modalBackdrop';
import {
  ModalContainer,
  ModalTitle,
  ModalForm,
  FormGroup,
  FormLabel,
  FormInput,
  ButtonContainer,
} from './modal.styled';
import { Button } from '../buttons/button';

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
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalTitle>Add Car</ModalTitle>
          <ModalForm>
            <FormGroup>
              <FormLabel>
                Company:
                <FormInput
                  type="text"
                  name="car"
                  value={newCar.company}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Model:
                <FormInput
                  type="text"
                  name="car_model"
                  value={newCar.model}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                VIN:
                <FormInput
                  type="text"
                  name="car_vin"
                  value={newCar.vin}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Color:
                <FormInput
                  type="text"
                  name="car_color"
                  value={newCar.color}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Year:
                <FormInput
                  type="text"
                  name="car_model_year"
                  value={newCar.year}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Price:
                <FormInput
                  type="text"
                  name="price"
                  value={newCar.price}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Availability:
                <FormInput
                  type="text"
                  name="availability"
                  value={newCar.availability}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
          </ModalForm>
          <ButtonContainer>
            <Button onClick={handleAdd} text={'Add'} />
            <Button onClick={closeModal} text={'Cancel'} />
          </ButtonContainer>
        </ModalContainer>
      </ModalBackdrop>
    )
  );
};
