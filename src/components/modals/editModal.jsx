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
import { SelectStyled, OptionStyled } from '../carsList/carsList.styled';
import { Button } from '../buttons/button';
import { colorOptions } from '../../helpers/colorOptions';

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
                <SelectStyled
                  name="car_color"
                  value={editedCar.color}
                  onChange={e =>
                    setEditedCar(prevCar => ({
                      ...prevCar,
                      car_color: e.target.value,
                    }))
                  }
                >
                  <OptionStyled value="">Select a color</OptionStyled>
                  {colorOptions.map(color => (
                    <OptionStyled key={color} value={color}>
                      {color}
                    </OptionStyled>
                  ))}
                </SelectStyled>
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
                <SelectStyled
                  name="availability"
                  value={editedCar.availability ? 'true' : 'false'}
                  onChange={e =>
                    setEditedCar(prevCar => ({
                      ...prevCar,
                      availability: e.target.value === 'true' ? true : false,
                    }))
                  }
                >
                  <OptionStyled value="">-- Select --</OptionStyled>
                  <OptionStyled value="false">Not available</OptionStyled>
                  <OptionStyled value="true">Available</OptionStyled>
                </SelectStyled>
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
