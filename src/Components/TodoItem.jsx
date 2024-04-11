const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span>
        { props.complete ? <></> : <input type="checkbox"></input> }
        <span>{props.taskName}</span>
      </span>
      <p>...</p>
    </li>
  );
};
export default TodoItem;
