import React, {useState} from "react";

const initialValues = [
    {
        id: Math.random(),
        name: "test1",
        isDone: false,
    },
    {
        id: Math.random(),
        name: "test2",
        isDone: false,
    }
];

const TodoListFunctional = () => {
    const [todos, setTodos] = useState(initialValues);
    const [name, setName] = useState('');

    const inputHandler = (e) => {
        setName(e.target.value);
        console.log(e.target.value)
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!name) return null;
        //if(!name) return false;
        let newTodo = {
            id: Math.random(),
            name: name,
            isDone: false,
        }
        console.log(newTodo)
        setTodos(() => {
                return [...todos, newTodo]
            }
        )
        setName('')
    };

    const doneUpdate = (id) => {
        let newTodo = todos.map(el => {
            if (id === el.id) return {...el, isDone: !el.isDone};
            return el;
        })
        setTodos(newTodo);
        console.log(todos)
    };

    return (
        <>
            <h2>Todo List</h2>
            <form onSubmit={addTodoHandler}>
                <input type="text" value={name} onChange={inputHandler}/>
                <button className="add-button" type="submit"> Add ToDo</button>
            </form>

            <TrackProgress todos={todos}/>

            <DisplayList todos={todos}  doneUpdate={doneUpdate}/>

            <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                    
                    .add-button {
                         background-color: #cee4ff;
                         color: darkblue;
                         border: 1px solid darkblue;
                    }
                    .task-counter{
                    margin: auto, 1rem;
                    }
                `}</style>
        </>
    )
}

export default TodoListFunctional;


export const TrackProgress = ({todos}) => {
    const result = todos.length;
    const isNotDone = (todos.filter(el => el.isDone !== true)).length;
    return (
        <p className="task-counter">
            {isNotDone} remaining out of {result} tasks
        </p>
    );
}

export const DisplayList = ({todos, doneUpdate }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    onClick={() => doneUpdate(todo.id)}
                    className={todo.isDone ? "is-done" : {}}
                >
                    {todo.name}
                </li>)
            )}
        </ul>
    )
}
