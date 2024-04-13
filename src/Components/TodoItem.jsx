import { useContext } from "react";
import { TodoContext }  from "../Context/Context";

const TodoItem = (props) => {
  const todoItem = useContext(TodoContext);
  console.log('value', todoItem);
  return (
    <li className="todo-item">
      {todoItem[0].taskName}
      <span>
        { props.complete ? <></> : <input type="checkbox"></input> }
        {props.complete ? <span><strike>{props.taskName}</strike></span> : <span>{props.taskName}</span>} 
      </span>
        {props.complete ? <></> : <p>...</p>}
    </li>
  );
};

export default TodoItem;
