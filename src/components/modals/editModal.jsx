import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../../redux/cars/carsSlice';
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

  const [currencyAdded, setCurrencyAdded] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    let formattedValue = value;
    const numericValue = value.replace(/[^0-9,]/g, '');

    if (name === 'price' && !currencyAdded) {
      const parts = numericValue.split(',');
      if (parts.length > 1 && parts[1].length < 2) {
        formattedValue = `${parts[0]},${parts[1].padEnd(2, '0')}`;
      }
      setEditedCar(prevCar => ({
        ...prevCar,
        [name]: `$${formattedValue}`,
      }));
      setCurrencyAdded(true);
    } else if (name === 'price' && currencyAdded) {
      setEditedCar(prevCar => ({
        ...prevCar,
        [name]: `$${numericValue}`,
      }));
    } else {
      setEditedCar(prevCar => ({
        ...prevCar,
        [name]: value,
      }));
    }
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
        <ModalContainer>
          <ModalTitle>Edit Car</ModalTitle>
          <ModalForm onClick={handleFormClick} onSubmit={handleFormSubmit}>
            <FormGroup>
              <FormLabel>
                Company:
                <FormInput type="text" value={car} disabled />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Model:
                <FormInput type="text" value={car_model} disabled />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                VIN:
                <FormInput type="text" value={car_vin} disabled />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Color:
                <FormInput
                  type="text"
                  name="car_color"
                  value={editedCar.car_color}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Year:
                <FormInput type="text" value={car_model_year} disabled />
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Price:
                <FormInput
                  type="text"
                  name="price"
                  value={editedCar.price}
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
                  value={editedCar.availability}
                  onChange={handleInputChange}
                />
              </FormLabel>
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleSave} text={'Save'} />
              <Button onClick={closeModal} text={'Close'} />
            </ButtonContainer>
          </ModalForm>
        </ModalContainer>
      </ModalBackdrop>
    )
  );
};
