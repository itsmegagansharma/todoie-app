import React, { useEffect , useState} from "react";

const UseEffectHookPractice = () => {
 // This One is For Mounting
    useEffect(() => {
    console.log("i am running");
  }, []);
const [count, setCount] = useState(0);
  // This One is For Update
  useEffect(() => {
    console.log("i am running");
  }, [count]);

  // This One is For Unmounting
  useEffect(() => {
    console.log("i am running");
    return () => {
        console.log('i am unmounting');
    }
  }, [count]);
  return <div>Hey There!!!!</div>;
};

export default UseEffectHookPractice;
