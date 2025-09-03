// src/components/Dashboard.jsx
import React from 'react';

// Recebe a lista de exercícios como uma prop
const Dashboard = ({ exercises }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Resumo de Exercícios</h2>
      
      {exercises.length === 0 ? (
        <p className="text-gray-500">Nenhum exercício registrado ainda. Adicione um para começar!</p>
      ) : (
        <ul className="space-y-4">
          {exercises.map((exercise, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">{exercise.type}</span>
                <span className="text-sm text-gray-500">{exercise.date}</span>
              </div>
              <p className="mt-1 text-gray-600">
                Distância: <span className="font-semibold">{exercise.distance} km</span>
              </p>
              <p className="mt-1 text-gray-600">
                Duração: <span className="font-semibold">{exercise.duration} min</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;