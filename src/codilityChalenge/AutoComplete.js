import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';
// import './App.css'

export default function AutoComplete() {
    const [hintData, setHintData] = useState([])
    const [text, setText] = useState('')

    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
         let hintArray = []
        res.data.map(a => hintArray.push(a.name))
        setHintData(hintArray)
    }

    useEffect(()=> {
        getData()
    })

    return (
        <div className="App">
            <h5>Try typing these words</h5>
            <code>{`[${hintData.toString()}]`}</code>
            <br/>
            <br/>
            <br/>
            <Hint options={hintData} allowTabFill>
                <input className='input-with-hint'
                       value={text}
                       onChange={e => setText(e.target.value)}
                />
            </Hint>
        </div>
    );
}







// import React, {useEffect, useState} from 'react';
// import classNames from "classnames";
// import lodash from 'lodash';
// import axios from 'axios'
//
// //const ITEMS_API_URL = q => `https://example.com/api/items&q=${q}`;
// const ITEMS_API_URL = 'https://restcountries.eu/rest/v2/all'
// const DEBOUNCE_DELAY = 500;
//
// export default function AutoComplete() {
//     const [contries, setContries] = useState([]);
//     const [text, setText] = useState('');
//     const []
//
//     useEffect(() => {
//         const getData = async () => {
//             const response = await axios({
//                 method: 'get',
//                 url: ITEMS_API_URL,
//             })
//             console.log(response.data)
//             setContries(response.data)
//         }
//         getData()
//     }, [])
//
//     const onChangeHandler = (text) => {
//         let matches = [];
//         if(text.length > 0) {
//             const regex = new RegExp(`${text}`, 'gi');
//             return contries.name.match(regex);
//         }
//     }
//
//         setText(text)
//         console.log(text)
//     }
//
//     return (
//         <div className="wrapper">
//             <div className="control">
//                 <input
//                     type="text"
//                     className="input"
//                     value={text}
//                     onChange={e => onChangeHandler(e.target.value)}
//                 />
//                 <div className="list is-hoverable"/>
//
//             </div>
//
//             <style>{`
//                     .control {
//                          text-align: center;
//                     }
//                     .input{
//                         border: 2px solid #d3d3d3ff;
//                         width: 20rem;
//                         height: 2rem;
//                         border-radius: 5px;
//                     }
//                     .is-hoverable{
//                     }
//                 `}</style>
//         </div>
//     )
// }


//npm i -g npm
//npm i --save lodash
