import React from 'react';
// import { Counter } from './features/counter/Counter';
import { DndTable } from './features/dndTable/dndTable'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <DndTable />
      </header>
    </div>
  );
}

export default App;
