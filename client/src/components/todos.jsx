import react from 'react';
import './todos.css'

export default function todos(props) {
  const {id, content, deadline} = props;

  return (
    <react.Fragment>
      <h3>#{id} - {content} - {deadline} </h3>
    </react.Fragment>
  )
}