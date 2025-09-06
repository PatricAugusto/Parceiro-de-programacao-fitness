import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #2d3748;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent; 
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #48bb78; 
  }
`;

const Title = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #a0aec0;
`;

const Value = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-top: 0.25rem;
`;

const Unit = styled.span`
  font-size: 1rem;
  font-weight: normal;
  color: #a0aec0;
`;

const StatCard = ({ title, value, unit }) => {
  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <Value>
          {value.toFixed(1)} <Unit>{unit}</Unit>
        </Value>
      </div>
    </CardContainer>
  );
};

export default StatCard;