import { useContext } from "react";
import { saveButton } from "../Context/Context";
const MyButton = (props) => {
  const [save , setSave] = useContext(saveButton);
  function handleButton(){
    setSave(!save);
  }
  return (
    <button className="todo-button" onClick={handleButton}>{props.title}</button>
  );
};
export default MyButton;
