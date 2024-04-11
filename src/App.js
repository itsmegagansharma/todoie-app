import "./App.css";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import MyButton from "./Components/MyButton";
// import UseStateHookPractice from "./Components/UseStateHookPractice";
//import UseEffectHookPractice from "./Components/UseEffectHookPractice";

function App() {
  let todoList = [
    { taskName: "Eat", complete: false },
    { taskName: "Code", complete: false },
    { taskName: "Sleep", complete: false },
    { taskName: "Repeat", complete: false },
  ];

  return (
    <div className="app-container">
      {/* <UseStateHookPractice /> */}
      {/* <UseEffectHookPractice /> */}
      <header>
        <Header title="Todo App" />
      </header>
      <div>
        { todoList.map((todo, index) => (
          <TodoItem
            key={index}
            taskName={todo.taskName}
            complete={todo.complete}
          />
        ))}
      </div>
      <footer>
        <MyButton />
      </footer>
    </div>
  );
}

export default App;
