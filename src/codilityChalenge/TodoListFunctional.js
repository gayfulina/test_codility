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

    const manageTodo = itemIndex => {


    }

    return (
        <>
            <h2>Todos List</h2>
            <form onSubmit={addTodoHandler}>
                <input type="text" value={name} onChange={inputHandler}/>
                <button className="add-button" type="submit"> Add ToDo</button>
            </form>

            <TrackProgress todos={todos}/>

            <DisplayList todos={todos}/>

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
    const isNotDone = (todos.filter(el => el.isDone !== false)).length;
    return (
        <p className="task-counter">
         {isNotDone} remaining out of {result} tasks
        </p>
    );
}

export const DisplayList = ({todos}) => {
    return (
        <ul>
            {
                todos.map(el =>
                    <li key={el.id}> {el.name} </li>)
            }
        </ul>
    )
}

// export const Button = () => {
//
// }
//
// export const Input = () => {
//
// }


// import React, {useState} from 'react';
// //import classNames from 'classNames';
//
// export const styles = {
//     counterButton: {
//         fontSize: "1rem",
//         padding: "5px 10px",
//         color: "585858",
//         backgroundColor: "blue",
//     },
//     h2: {
//         fontStyle: "italic",
//         color: "blue"
//     }
// };
//
// const initState = [
//     {id: Math.random(), title: ''},
// ]
//
// function TodoListFunctional() {
//     const [todos, setTodos] = useState(initState);
//     const [title, setTitle] = useState('');
//
//     const addTodo = (e) => {
//         e.preventDefault();
//         const newTodo = {
//             id: Math.random(),
//             title: title,
//         };
//         const newList = [...todos, newTodo]
//         setTodos(newList);
//         setTitle('');
//     }
//
//     return (
//         <>
//             <div>
//                 <input type="text"
//                        onChange={(event) => setTitle(event.target.value)}
//                        value={title}/>
//                 <button className={styles.counterButton} onClick={addTodo}>Add</button>
//             </div>
//             <div>
//                 {todos.map(el => <div key={el.id}>{el.title}</div>)}
//             </div>
//
//         </>
//     );
// }
//
// export default TodoListFunctional;
