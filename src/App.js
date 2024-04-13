import "./App.css";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import MyButton from "./Components/MyButton";
import AddTo from "./Components/AddTo";
import React, { useState, useContext, createContext } from "react";
import { TodoContext } from "./Context/Context";
import { saveButton } from "./Context/Context";
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
  const [save, setSave] = useState(true);
  console.log("todolist", todoLists);

  function handleSave() {
    setSave(!save);
  }

  return (
    <div className="app-container">
      {/* <UseStateHookPractice /> */}
      {/* <UseEffectHookPractice /> */}
      <header>
        <Header title="Todo App" />
      </header>
      {save ? (
        <section>
          <TodoContext.Provider value={[todoLists, setTodoLists]}>
            <div>
              <TodoItem />
            </div>
          </TodoContext.Provider>
        </section>
      ) : (
        <section>
          <AddTo />
        </section>
      )}
      <footer>
        {save ? (
          <saveButton.Provider value={[save, setSave]}>
            <MyButton title="Add To Do" />
          </saveButton.Provider>
        ) : (
          <saveButton.Provider value={[save, setSave]}>
            <MyButton title="Save" />
          </saveButton.Provider>
        )}
      </footer>
    </div>
  );
}

export default App;
