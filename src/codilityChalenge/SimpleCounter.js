import './App.css';
import {useState} from "react";

const initialCounters = [
    {id: Math.random(), counter: 0}
]

function SimpleCounter() {
    const [list, setList] = useState(initialCounters);

    const changeCounterHandler = (id, value) => {
        const newCounter = list.map(el => {
            if (el.id === id) return {...el, counter: el.counter + value};
            return el;
        })
        setList(newCounter);
    }

    const addCounter = () => {
        const newCounter = {
            id: Math.random(),
            counter: 0
        }
        setList([...list, newCounter])

        // let newCounter = [...list];
        // newCounter.push(newCounter[newCounter.length - 1])
        // setList(newCounter)
        // console.log(newCounter)
    }

    const deleteCounterHandler = (id) => {
        const newCounter = list.filter(el => el.id !== id);
        setList(newCounter);
    }

    const resetHandler = () => {
        setList(initialCounters);
    }

    return (
        <div>
            {list.map(el =>
                <div key={el.id}>
                    <button onClick={(id) => changeCounterHandler(el.id, +1)}>+</button>
                    {el.counter}
                    <button onClick={(id) => changeCounterHandler(el.id, -1)}>-</button>
                    <button onClick={() => deleteCounterHandler(el.id)}>x</button>
                </div>)}

            <hr/>

            <div>
                <button onClick={addCounter}>Add Counter</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
}

export default SimpleCounter;
