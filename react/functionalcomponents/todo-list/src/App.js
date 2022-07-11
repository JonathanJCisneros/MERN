import './App.css';
import DisplayTodo from './components/DisplayTodo';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])

  const addTodo = (newTodo) => setTodoList([...todoList, newTodo])
  return (
    <div className="App">
      <AddTodo newTodo={addTodo}/>
      <DisplayTodo newList={todoList}/>
    </div>
  );
}

export default App;
