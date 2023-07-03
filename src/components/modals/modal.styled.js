import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  max-width: 500px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

export const SaveButton = styled.button`
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CloseButton = styled.button`
  padding: 8px 15px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 10px;

  &:hover {
    background-color: #555e64;
  }
`;
