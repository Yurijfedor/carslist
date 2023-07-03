import { useDispatch } from 'react-redux';
import { deleteCar } from '../../redux/cars/carsSlice';
import { ModalBackdrop } from '../modalBackdrop/modalBackdrop';
import {
  ModalContainer,
  ModalTitle,
  ButtonContainer,
  TextStyled,
} from './modal.styled';
import { Button } from '../buttons/button';

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
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalTitle>Delete Car</ModalTitle>
          <TextStyled>Are you sure?</TextStyled>
          <TextStyled>You want to delete this car!</TextStyled>
          <TextStyled>Car: {item.car}</TextStyled>
          <TextStyled>VIN: {item.car_vin}</TextStyled>
          <ButtonContainer>
            <Button onClick={handleDelete} text={'Delete'} />
            <Button onClick={closeModal} text={'Cancel'} />
          </ButtonContainer>
        </ModalContainer>
      </ModalBackdrop>
    )
  );
};
