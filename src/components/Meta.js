import React, { useState } from 'react';

const Meta = ({ nombre, completada }) => {
  const [isCompleted, setIsCompleted] = useState(completada);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={handleComplete}>
        {isCompleted ? 'Desmarcar como completada' : 'Marcar como completada'}
      </button>
    </div>
  );
};

const Metas = ({ metas }) => {
  return (
    <div>
      {metas.map((meta) => (
        <Meta key={meta.nombre} nombre={meta.nombre} completada={meta.completada} />
      ))}
    </div>
  );
};

const App = () => {
  const metas = [
    { nombre: 'Aprender CSS', completada: false },
    { nombre: 'Hacer otra cosa', completada: true },
    { nombre: 'Hacer algo más', completada: false },
  ];

  return <Metas metas={metas} />;
};

export default App;