function HelloWidget({ name = 'Mundo' }) {
  // Le ponemos un borde azul para ver el Shadow DOM en acción
  const style = {
    padding: '20px',
    border: '2px solid blue',
    borderRadius: '8px',
    backgroundColor: '#f0f8ff'
  };

  return (
    <div style={style}>
      <h2>¡Hola desde React! 👋</h2>
      <p>Este es tu Web Component saludando a: <strong>{name}</strong></p>
    </div>
  );
}

export default HelloWidget;
