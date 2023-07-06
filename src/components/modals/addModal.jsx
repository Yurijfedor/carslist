import { useState, useEffect } from 'react';
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
import { SelectStyled, OptionStyled } from '../carsList/carsList.styled';
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
    availability: true,
  });

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
      setNewCar(prevCar => ({
        ...prevCar,
        [name]: `$${formattedValue}`,
      }));
      setCurrencyAdded(true);
    } else if (name === 'price' && currencyAdded) {
      setNewCar(prevCar => ({
        ...prevCar,
        [name]: `$${numericValue}`,
      }));
    } else {
      setNewCar(prevCar => ({
        ...prevCar,
        [name]: value,
      }));
    }
  };
  const handleAdd = () => {
    dispatch(addCar(newCar));
    closeModal();
    setCurrencyAdded(false);
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
                <SelectStyled
                  name="availability"
                  value={newCar.availability ? 'true' : 'false'}
                  onChange={e =>
                    setNewCar(prevCar => ({
                      ...prevCar,
                      availability: e.target.value === 'true' ? true : false,
                    }))
                  }
                >
                  <OptionStyled value="">-- Select --</OptionStyled>
                  <OptionStyled value="false">False</OptionStyled>
                  <OptionStyled value="true">True</OptionStyled>
                </SelectStyled>
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
