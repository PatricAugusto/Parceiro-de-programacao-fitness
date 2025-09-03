// src/App.jsx
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import ExerciseForm from './components/ExerciseForm';

function App() {
  // Estado para armazenar a lista de exercícios
  const [exercises, setExercises] = useState([]);

  // Função para adicionar um novo exercício à lista
  const addExercise = (newExercise) => {
    // Adiciona o novo exercício ao início da lista
    setExercises([newExercise, ...exercises]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Monitor de Exercícios
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Passando a lista de exercícios para o Dashboard */}
        <Dashboard exercises={exercises} />
        {/* Passando a função addExercise como prop para o ExerciseForm */}
        <ExerciseForm onAddExercise={addExercise} />
      </div>
    </div>
  );
}

export default App;