import React from 'react';

function App(props) {
  const { name, age, id, onSelect } = props;
  return (
    <div
      key={id}
      style={{ border: '1px solid red', marginBottom: 20 }}
      onClick={() => onSelect({ name, age, id })}
    >
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

export default App;
