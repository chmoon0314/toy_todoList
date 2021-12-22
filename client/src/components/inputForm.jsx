import react from 'react';
import axios from 'axios';
import './inputForm.css'

export default function form() {
  const [content, setCont] = react.useState('');
  const [dead, setDead] = react.useState('');
  const [disabled, setDis] = react.useState(false);
  const handleCont = ({target:{value}}) => setCont(value);
  const handleDead = ({target:{value}}) => setDead(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setDis(true);
    if(window.confirm("등록하시겠습니까?"))
      axios.post("/api/todos", {data: content, dead: dead}).then(()=>setDis(false));
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="content" onChange={handleCont} autoComplete="off"/>
        <input name="deadline" type="time" onChange={handleDead} autoComplete="off"/>
        <button type="submit" disabled={disabled}>등록</button>
      </form>
    </div>
  )
}