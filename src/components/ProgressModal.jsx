import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #2d3748;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 90%;
  max-width: 400px;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #a0aec0;
  margin-bottom: 0.25rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  background-color: #4a5568;
  border: 1px solid #4a5568;
  border-radius: 0.375rem;
  color: #fff;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 100, 100, 0.5);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SubmitButton = styled.button`
  flex: 1;
  background-color: #4a5568;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #6a768c;
  }
`;

const CancelButton = styled(SubmitButton)`
  background-color: transparent;
  border: 1px solid #4a5568;
  &:hover {
    background-color: #4a5568;
  }
`;

const ProgressModal = ({ exercise, onUpdate, onCancel }) => {
  const [distance, setDistance] = useState(exercise.distance);
  const [duration, setDuration] = useState(exercise.duration);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(exercise.id, parseFloat(distance), parseInt(duration));
  };

  return (
    <ModalOverlay onClick={onCancel}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle>Marcar Progresso</ModalTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="progress-distance">Distância (km)</Label>
            <StyledInput
              type="number"
              id="progress-distance"
              step="0.1"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="progress-duration">Duração (minutos)</Label>
            <StyledInput
              type="number"
              id="progress-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </FormGroup>

          <ButtonWrapper>
            <SubmitButton type="submit">Atualizar</SubmitButton>
            <CancelButton type="button" onClick={onCancel}>Cancelar</CancelButton>
          </ButtonWrapper>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProgressModal;