import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import ExerciseForm from './components/ExerciseForm';
import ProgressModal from './components/ProgressModal';

const AppContainer = styled.div`
  background-color: #1a202c;
  min-height: 100vh;
  padding: 2rem;
  color: #f7fafc;
`;

const MainTitle = styled.h1`
  font-size: 2.25rem;
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
  const [exercises, setExercises] = useState(() => {
    try {
      const storedExercises = localStorage.getItem('exercises');
      return storedExercises ? JSON.parse(storedExercises) : [];
    } catch (error) {
      console.error("Erro ao carregar dados do LocalStorage:", error);
      return [];
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);

  const [isProgressing, setIsProgressing] = useState(false);
  const [progressExercise, setProgressExercise] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('exercises', JSON.stringify(exercises));
    } catch (error) {
      console.error("Erro ao salvar dados no LocalStorage:", error);
    }
  }, [exercises]);

  const addExercise = (newExercise) => {
    const exerciseWithStatus = {
      ...newExercise,
      id: Date.now(),
      status: 'pending',
      progress: 0,
    };
    setExercises(prevExercises => [exerciseWithStatus, ...prevExercises]);
  };

  const updateExercise = (updatedExercise) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === updatedExercise.id ? updatedExercise : exercise
      )
    );
    setIsEditing(false);
    setCurrentExercise(null);
  };

  const updateExerciseStatus = (id, newStatus) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === id ? { ...exercise, status: newStatus } : exercise
      )
    );
  };

  const deleteExercise = (id) => {
    setExercises(prevExercises => prevExercises.filter(exercise => exercise.id !== id));
  };

  const startEdit = (exercise) => {
    setIsEditing(true);
    setCurrentExercise(exercise);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentExercise(null);
  };

  const startProgress = (exercise) => {
    setIsProgressing(true);
    setProgressExercise(exercise);
  };

  const cancelProgress = () => {
    setIsProgressing(false);
    setProgressExercise(null);
  };

  const updateProgress = (id, newDistance, newDuration) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === id ? { ...exercise, distance: newDistance, duration: newDuration } : exercise
      )
    );
    cancelProgress();
  };

  return (
    <AppContainer>
      <MainTitle>Monitor de Exercícios</MainTitle>
      <ContentWrapper>
        <Dashboard
          exercises={exercises}
          updateStatus={updateExerciseStatus}
          onEdit={startEdit}
          onProgress={startProgress}
          onDelete={deleteExercise} 
        />
        {isEditing ? (
          <ExerciseForm
            onAddExercise={updateExercise}
            initialData={currentExercise}
            onCancel={cancelEdit}
            isEditing={true}
          />
        ) : (
          <ExerciseForm onAddExercise={addExercise} />
        )}
      </ContentWrapper>
      {isProgressing && (
        <ProgressModal
          exercise={progressExercise}
          onUpdate={updateProgress}
          onCancel={cancelProgress}
        />
      )}
    </AppContainer>
  );
}

export default App;