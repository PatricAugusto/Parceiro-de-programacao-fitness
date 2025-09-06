// src/App.jsx
import { useState } from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import ExerciseForm from './components/ExerciseForm';

// Componente estilizado para o contêiner principal
const AppContainer = styled.div`
  background-color: #1a202c; /* Cor de fundo cinza escuro */
  min-height: 100vh;
  padding: 2rem;
  color: #f7fafc; /* Cor do texto principal */
`;

const MainTitle = styled.h1`
  font-size: 2.25rem; /* 36px */
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

function App() {
  const [exercises, setExercises] = useState([]);

  const addExercise = (newExercise) => {
    setExercises([newExercise, ...exercises]);
  };

  return (
    <AppContainer>
      <MainTitle>Monitor de Exercícios</MainTitle>
      <ContentWrapper>
        <Dashboard exercises={exercises} />
        <ExerciseForm onAddExercise={addExercise} />
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;