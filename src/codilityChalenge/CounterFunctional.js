//import cx from 'classnames';
import React, {useState} from "react";

const CounterFunctional = () => {
    const [count, setCount] = useState(42);

    const addButtonHandler = () => {
        let newCount = count + 1;
        setCount(newCount);
        console.log("add")
    }

    return (
        <>
            <Title>Counter</Title>
            <Result>{count}</Result>
            <Button addButtonHandler={addButtonHandler}>Add</Button>

            <style>{`
            .title {
              text-align: center;
            }
            .counter-button {
             font: 1rem;
             padding: 5px 10px;
             background-color: #cee4ff;
             }
                `}</style>
        </>
    )
}

export default CounterFunctional;

export const Title = ({children}) => {
    return <h2 className="title">{children}</h2>
}

export const Button = ({children, addButtonHandler}) => {
    return (
        <button
            onClick={addButtonHandler}
            className="counter-button"
        >
            {children}
        </button>
    )
}

export const Result = ({children}) => {
    return (
        <p>
            {children}
        </p>
    )
}
