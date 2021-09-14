import React, {useState} from 'react';
//import classNames from 'classNames';

export const styles = {
    counterButton: {
        fontSize: "1rem",
        padding: "5px 10px",
        color: "585858",
        backgroundColor: "blue",
    },
    h2: {
        fontStyle: "italic",
        color: "blue"
    }
};

const initState = [
    {id: Math.random(), title: ''},
]

function App() {
    const [todos, setTodos] = useState(initState);
    const [title, setTitle] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            title: title,
        };
        const newList = [...todos, newTodo]
        setTodos(newList);
        setTitle('');
    }

    return (
        <>
            <div>
                <input type="text"
                       onChange={(event) => setTitle(event.target.value)}
                       value={title}/>
                <button className={styles.counterButton} onClick={addTodo}>Add</button>
            </div>
            <div>
                {todos.map(el => <div key={el.id}>{el.title}</div>)}
            </div>

        </>
    );
}

export default App;


// //import cx from 'classnames';
// import React, {useState} from 'react';
//
// const styles = {
//     counterButton: {
//     fontSize: "1rem",
//     padding: "5px 10px",
//     color: "#585858",
// },
//     h2: {
//         fontStyle: "italic",
//         color: "blue"
//     }
// };
//
//
// function App() {
//
//     const initCounter = [42];
//     const [counter, setCounter] = useState(initCounter)
//
//         const counterChange = () => {
//         let newCounter = +counter + 1;
//             setCounter(newCounter);
//         }
//
//         return (
//             <>
//                 <div>
//                     <h2>Counter</h2>
//                     <h2>{counter}</h2>
//
//                     <div className="buttons">
//                         <button className={styles.myButton} onClick={counterChange}> +1</button>
//                         <hr/>
//                     </div>
//                 </div>
//             </>
//         );
//     }
//
//     export default App;
