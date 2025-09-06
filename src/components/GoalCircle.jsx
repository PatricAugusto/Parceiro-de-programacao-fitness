// src/components/GoalCircle.jsx
import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background-color: #2d3748;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const CircleSVG = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const BackgroundCircle = styled.circle`
  stroke: #4a5568;
  stroke-width: 8;
  fill: transparent;
`;

const ProgressCircle = styled.circle`
  stroke: #48bb78; 
  stroke-width: 8;
  fill: transparent;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

const GoalText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const GoalCircle = ({ progress, goal }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <CircleContainer>
      <CircleWrapper>
        <CircleSVG viewBox="0 0 100 100">
          <BackgroundCircle
            cx="50"
            cy="50"
            r={radius}
          />
          <ProgressCircle
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </CircleSVG>
        <GoalText>
          {progress.toFixed(0)}%
        </GoalText>
      </CircleWrapper>
      <p style={{ color: '#a0aec0', marginTop: '0.5rem', fontSize: '0.875rem' }}>Meta: {goal} km</p>
    </CircleContainer>
  );
};

export default GoalCircle;