// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StatCard from './StatCard';

// Estilos para o contêiner do Dashboard
const DashboardContainer = styled.div`
  background-color: #2d3748; /* Fundo cinza escuro */
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

// Estilos para a grade de estatísticas
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
  background-color: #4a5568; /* Fundo do item de lista */
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #4a5568;
  margin-bottom: 1rem;
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

const Dashboard = ({ exercises }) => {
  const [summary, setSummary] = useState({
    dailyDistance: 0,
    dailyDuration: 0,
    weeklyDistance: 0,
    monthlyDistance: 0,
  });

  useEffect(() => {
    // ... (lógica de cálculo permanece a mesma)
    const today = new Date().toISOString().slice(0, 10);
    const last7Days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const last30Days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

    const dailyExercises = exercises.filter(e => e.date === today);
    const weeklyExercises = exercises.filter(e => e.date >= last7Days);
    const monthlyExercises = exercises.filter(e => e.date >= last30Days);

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
            {exercises.map((exercise, index) => (
              <ExerciseItem key={index}>
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
              </ExerciseItem>
            ))}
          </ExerciseList>
        )}
      </RecentExercisesContainer>
    </DashboardContainer>
  );
};

export default Dashboard;