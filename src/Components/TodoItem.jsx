const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span>
        { props.complete ? <></> : <input type="checkbox"></input> }
        {props.complete ? <span><strike>{props.taskName}</strike></span> : <span>{props.taskName}</span>} 
      </span>
        {props.complete ? <></> : <p>...</p>}
    </li>
  );
};
export default TodoItem;
