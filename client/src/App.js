import './App.css';
import TodoComponent from './components/todos'
import InputForm from './components/inputForm'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todo, setTodo] = useState(undefined);
  useEffect(()=>{
    axios.get("api/todos").then((res)=>{
      setTodo(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <InputForm />
        {
          todo ? todo.map((data) => (<TodoComponent key={data.id} {...data}></TodoComponent>)):"wait"
        }      
      </header>
    </div>
  );
}

export default App;
