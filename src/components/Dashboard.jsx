import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; 
import StatCard from './StatCard';
import GoalCircle from './GoalCircle';

const DashboardContainer = styled.div`
  background-color: #2d3748;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 100%;
`;

const DashboardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const RecentExercisesContainer = styled.div`
  margin-top: 2rem;
`;

const RecentExercisesTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
`;

const ExerciseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ExerciseItem = styled.li`
  background-color: #4a5568;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #48bb78;
  }
`;

const ExerciseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 500;
`;

const ExerciseDetail = styled.p`
  margin-top: 0.25rem;
  color: #a0aec0;
`;

const ExerciseActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: #4a5568;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #6a768c;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #e53e3e;
  &:hover {
    background-color: #c53030;
  }
`;

const Dashboard = ({ exercises, updateStatus, onEdit, onProgress, onDelete }) => {
  const [summary, setSummary] = useState({
    dailyDistance: 0,
    dailyDuration: 0,
    weeklyDistance: 0,
    monthlyDistance: 0,
  });

  const dailyGoal = 5;

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const last7Days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const last30Days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    
    const dailyExercises = exercises.filter(e => e.date === today && e.status === 'completed');
    const weeklyExercises = exercises.filter(e => e.date >= last7Days && e.status === 'completed');
    const monthlyExercises = exercises.filter(e => e.date >= last30Days && e.status === 'completed');
    
    const dailyDistance = dailyExercises.reduce((sum, e) => sum + e.distance, 0);
    const dailyDuration = dailyExercises.reduce((sum, e) => sum + e.duration, 0);
    const weeklyDistance = weeklyExercises.reduce((sum, e) => sum + e.distance, 0);
    const monthlyDistance = monthlyExercises.reduce((sum, e) => sum + e.distance, 0);

    setSummary({
      dailyDistance,
      dailyDuration,
      weeklyDistance,
      monthlyDistance,
    });
  }, [exercises]);

  return (
    <DashboardContainer>
      <DashboardTitle>Resumo de Atividades</DashboardTitle>
      
      <StatsGrid>
        <StatCard
          title="Distância Diária"
          value={summary.dailyDistance}
          unit="km"
        />
        <GoalCircle
          progress={(summary.dailyDistance / dailyGoal) * 100}
          goal={dailyGoal}
        />
        <StatCard
          title="Duração Diária"
          value={summary.dailyDuration}
          unit="min"
        />
        <StatCard
          title="Distância Semanal"
          value={summary.weeklyDistance}
          unit="km"
        />
        <StatCard
          title="Distância Mensal"
          value={summary.monthlyDistance}
          unit="km"
        />
      </StatsGrid>

      <RecentExercisesContainer>
        <RecentExercisesTitle>Últimos Exercícios</RecentExercisesTitle>
        {exercises.length === 0 ? (
          <p>Nenhum exercício registrado ainda.</p>
        ) : (
          <ExerciseList>
            {exercises.map((exercise) => (
              <ExerciseItem key={exercise.id}>
                <ExerciseHeader>
                  <span>{exercise.type}</span>
                  <span>{exercise.date}</span>
                </ExerciseHeader>
                <ExerciseDetail>
                  Distância: <strong>{exercise.distance} km</strong>
                </ExerciseDetail>
                <ExerciseDetail>
                  Duração: <strong>{exercise.duration} min</strong>
                </ExerciseDetail>
                <ExerciseDetail>
                  Status: <strong>{exercise.status}</strong>
                </ExerciseDetail>

                <ExerciseActions>
                  {exercise.status !== 'completed' && (
                    <ActionButton onClick={() => updateStatus(exercise.id, 'completed')}>
                      Concluir
                    </ActionButton>
                  )}
                  {exercise.status !== 'completed' && (
                    <ActionButton onClick={() => onProgress(exercise)}>
                      Progresso
                    </ActionButton>
                  )}
                  <ActionButton onClick={() => onEdit(exercise)}>
                    Editar
                  </ActionButton>
                  <DeleteButton onClick={() => onDelete(exercise.id)}>
                    Deletar
                  </DeleteButton>
                </ExerciseActions>
              </ExerciseItem>
            ))}
          </ExerciseList>
        )}
      </RecentExercisesContainer>
    </DashboardContainer>
  );
};

export default Dashboard;