import React, { useState } from "react";

const UseStateHookPractice = () => {
    const [count, setCount] = useState(121);
    const [nameValue, setNameValue] = useState("Salesforce");
    return (
        <div>
            <p> Total Count : {count} </p>
            <p> Count is : {count % 2 === 0 ? "Even" : "Odd"} </p>
            <p> Name Value is : {nameValue} </p>
            <button onClick={() => setNameValue("React")}>Change Name</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default UseStateHookPractice;