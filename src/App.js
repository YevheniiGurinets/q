import React from 'react';
import Form from './Form';
import ListContainer from './ListContainer';
import './App.css';

const initList = [{ id: 1, name: 'kolya', age: 12 }, { id: 2, name: 'roma', age: 20 }];

function App() {
  const [list, setList] = React.useState(initList);
  const [selectedItem, setSelectedItem] = React.useState({});

  const handleSubmit = React.useCallback((val) => setList(list => list.map((e) => e.id === val.id ? val : e)), []);

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} item={selectedItem} />
      <ListContainer list={list} onSelect={setSelectedItem} />
    </div>
  );
}

export default App;
