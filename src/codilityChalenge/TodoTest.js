import React, {useState} from "react";

const TodoTest = () => {
    const initialValues = [
        {
            id: Math.random(),
            text: 'test',
            isDone: false,
        },
        {
            id: Math.random(),
            text: 'test2',
            isDone: false,
        }
    ];
    const [todos, setTodos] = useState(initialValues);
    const [textInput, setTextInput] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value);
        console.log(e.target.value)
    }

    const addButtonHandler = (e) => {
      //  e.preventDefault();
        const newTask = {
            id: Math.random(),
            text: textInput,
            isDone: false,
        }
        setTodos([...todos, newTask]);
        setTextInput('');
        console.log(newTask)
    }

    const doneUpdate = (id) => {
        const newTodo = todos.map(el => {
                if (id === el.id) return {...el, isDone: !el.isDone}
                return el;
            })
        setTodos(newTodo);
        console.log(todos)
    }

    return (
        <>
            <Title>Todo List</Title>
            <InputField inputHandler={inputHandler} value={textInput}/>
            <Button addButtonHandler={addButtonHandler}>Add Todo</Button>
            <TrackProgress todos={todos}/>
            <DisplayList todos={todos} doneUpdate={doneUpdate}/>

            <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
        </>
    )
}

export default TodoTest;

export const Title = ({children}) => {
    return <h2>{children}</h2>
}

export const Button = ({children, addButtonHandler}) => {
    return (
        <button
            type="submit"
            onClick={addButtonHandler}>
            {children}
        </button>
    )
}


export const InputField = ({value, inputHandler}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={inputHandler}
        />
    )
}

export const TrackProgress = ({todos}) => {
    const isNotDone = todos.filter(el => el.isDone !== true);
    return (
            <p>
                {isNotDone.length} remaining out of {todos.length} tasks
            </p>
    )
}

export const DisplayList = ({todos, doneUpdate}) => {
    return (
        <ul>
            {todos.map(todo =>
            <li
                key={todo.id}
                onClick={() => doneUpdate(todo.id)}
                className={todo.isDone? "is-done" : null}
            >
                {todo.text}
            </li>
            )}
        </ul>
    )
}


