import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import lodash from 'lodash';
import axios from 'axios'

//const ITEMS_API_URL = q => `https://example.com/api/items&q=${q}`;
const ITEMS_API_URL = 'https://restcountries.eu/rest/v2/all'
const DEBOUNCE_DELAY = 500;

export default function AutoComplete() {
    const [countries, setCountries] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios({
                method: 'get',
                url: ITEMS_API_URL,
            })
            console.log(response.data)
            setCountries(response.data)
        }
        getData()
    }, [])

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            const regex = new RegExp(`${text}`, 'gi');
            return countries.name.match(regex);
        }
        setText(text)
        console.log(text)
    }

    return (
        <div className="wrapper">
            <div className="control">
                <input
                    type="text"
                    className="input"
                    value={text}
                    onChange={e => onChangeHandler(e.target.value)}
                />
                <div className="list is-hoverable"/>

            </div>

            <style>{`
                    .control {
                         text-align: center;
                    }
                    .input{
                        border: 2px solid #d3d3d3ff;
                        width: 20rem;
                        height: 2rem;
                        border-radius: 5px;
                    }
                    .is-hoverable{
                    }
                `}</style>
        </div>
    )
}



//npm i -g npm
//npm i --save lodash
