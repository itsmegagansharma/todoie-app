import { useContext, useEffect } from "react";
import { TodoContext } from "../Context/Context";

const TodoItem = () => {
  const [todoItem, settodoItem] = useContext(TodoContext);
  console.log("value", todoItem);

  function handleChange(index, value) {
    var newTodo = todoItem;
    newTodo[index].complete = value;
    settodoItem(
      todoItem.map((todo, i) => {
        if (i === index) {
          todo.complete = value;
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    console.log("i am running 2");
    return () => {
      console.log("i am running 3");
    };
  }, [todoItem]);

  return (
    <>
      {todoItem.map((todo, index) => (
        <li className="todo-item" key={index}>
          <span>
            {todo.complete ? (
              <></>
            ) : (
              <input
                type="checkbox"
                key={index}
                value={todo.complete}
                onChange={() => handleChange(index, !todo.complete)}
              ></input>
            )}
            {todo.complete ? (
              <span>
                <strike>{todo.taskName}</strike>
              </span>
            ) : (
              <span>{todo.taskName}</span>
            )}
          </span>
          {todo.complete ? <></> : <p>...</p>}
        </li>
      ))}
    </>
  );
};

export default TodoItem;
