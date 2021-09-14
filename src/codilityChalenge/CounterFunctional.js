const CounterFunctional = () => {
 return(
     <>
         Counter
     </>
 )
}

export default CounterFunctional;















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
