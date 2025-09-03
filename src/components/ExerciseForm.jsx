// src/components/ExerciseForm.jsx
import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise }) => {
  const [type, setType] = useState('Caminhada');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  // 4. Criar a função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Converte a distância e a duração para números
    const exerciseData = {
      type,
      distance: parseFloat(distance),
      duration: parseInt(duration),
      date,
    };

    // Chama a função passada pelo componente pai
    onAddExercise(exerciseData);

    // Limpa o formulário
    setType('Caminhada');
    setDistance('');
    setDuration('');
    setDate('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Adicionar Exercício</h2>
      {/* Conectar o evento onSubmit ao formulário */}
      <form onSubmit={handleSubmit}>
        {/* Campo Tipo de Exercício */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Exercício
          </label>
          <select
            id="type"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            value={type} // 2. Vincula o valor do campo ao estado 'type'
            onChange={(e) => setType(e.target.value)} // 3. Atualiza o estado quando o valor muda
          >
            <option value="Caminhada">Caminhada</option>
            <option value="Corrida">Corrida</option>
          </select>
        </div>

        {/* Campo Distância */}
        <div className="mb-4">
          <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
            Distância (km)
          </label>
          <input
            type="number"
            id="distance"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            placeholder="Ex: 5.2"
            step="0.1"
            value={distance} // Vincula o valor do campo ao estado 'distance'
            onChange={(e) => setDistance(e.target.value)} // Atualiza o estado
          />
        </div>

        {/* Campo Duração */}
        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
            Duração (minutos)
          </label>
          <input
            type="number"
            id="duration"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            placeholder="Ex: 30"
            value={duration} // Vincula o valor do campo ao estado 'duration'
            onChange={(e) => setDuration(e.target.value)} // Atualiza o estado
          />
        </div>

        {/* Campo Data */}
        <div className="mb-6">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Data
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            value={date} // Vincula o valor do campo ao estado 'date'
            onChange={(e) => setDate(e.target.value)} // Atualiza o estado
          />
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default ExerciseForm;