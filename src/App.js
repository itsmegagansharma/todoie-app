import "./App.css";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import MyButton from "./Components/MyButton";
import React, { useState, useContext, createContext } from "react";
import { TodoContext } from "./Context/Context";
// import UseStateHookPractice from "./Components/UseStateHookPractice";
//import UseEffectHookPractice from "./Components/UseEffectHookPractice";

function App() {
  let todoList = [
    { taskName: "Eat", complete: false },
    { taskName: "Code", complete: true },
    { taskName: "Sleep", complete: false },
    { taskName: "Repeat", complete: false },
  ];
  const [todoLists, setTodoLists] = useState(todoList);
  console.log("todolist", todoLists);
  return (
    <div className="app-container">
      {/* <UseStateHookPractice /> */}
      {/* <UseEffectHookPractice /> */}
      <header>
        <Header title="Todo App" />
      </header>
      <TodoContext.Provider value={[todoLists, setTodoLists]}>
        <div>
          <TodoItem />
        </div>
      </TodoContext.Provider>
      <footer>
        <MyButton />
      </footer>
    </div>
  );
}

export default App;
