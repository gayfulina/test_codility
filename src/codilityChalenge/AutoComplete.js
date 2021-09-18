import React from 'react';
import classNames from "classnames";
import lodash from 'lodash';
import axios from 'axios'

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

export default function AutoComplete() {
    // const

    return (
        <div className="wrapper">
            <div className="control">
                <input type="text" className="input"/>
                <div className="list is-hoverable"/>
            </div>
        </div>
    )
}


//npm i -g npm
//npm i --save lodash
