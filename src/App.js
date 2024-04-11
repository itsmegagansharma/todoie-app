import "./App.css";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import MyButton from "./Components/MyButton";
// import UseStateHookPractice from "./Components/UseStateHookPractice";
import UseEffectHookPractice from "./Components/UseEffectHookPractice";

function App() {
  return (
    <div className="app-container">
      {/* <UseStateHookPractice /> */}
      {/* <UseEffectHookPractice /> */}
      <header>
        <Header title="Todo App"/>
      </header>
        <div>
        <TodoItem taskName = "Eat"/>
        <TodoItem taskName = "Code" complete = {false}/>
        <TodoItem taskName = "Sleep"/>
        <TodoItem taskName = "Repeat"/>
        </div>
      <footer>
        <MyButton />
      </footer>
    </div>
  );
}

export default App;
