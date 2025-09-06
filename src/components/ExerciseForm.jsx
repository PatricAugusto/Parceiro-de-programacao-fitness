// src/components/ExerciseForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #2d3748; /* Cor de fundo cinza */
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 100%;

  @media (min-width: 768px) {
    width: 33.333333%;
  }
`;

const FormTitle = styled.h2`
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
    box-shadow: 0 0 0 3px rgba(100, 100, 100, 0.5); /* Anel de foco cinza */
  }
`;

const StyledSelect = styled.select`
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

const SubmitButton = styled.button`
  width: 100%;
  background-color: #4a5568;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #6a768c;
  }
`;

const ExerciseForm = ({ onAddExercise }) => {
  const [type, setType] = useState('Caminhada');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const exerciseData = {
      type,
      distance: parseFloat(distance),
      duration: parseInt(duration),
      date,
    };

    onAddExercise(exerciseData);

    setType('Caminhada');
    setDistance('');
    setDuration('');
    setDate('');
  };

  return (
    <FormContainer>
      <FormTitle>Adicionar Exercício</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="type">Tipo de Exercício</Label>
          <StyledSelect
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Caminhada">Caminhada</option>
            <option value="Corrida">Corrida</option>
          </StyledSelect>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="distance">Distância (km)</Label>
          <StyledInput
            type="number"
            id="distance"
            placeholder="Ex: 5.2"
            step="0.1"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="duration">Duração (minutos)</Label>
          <StyledInput
            type="number"
            id="duration"
            placeholder="Ex: 30"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date">Data</Label>
          <StyledInput
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>

        <SubmitButton type="submit">Adicionar</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ExerciseForm;