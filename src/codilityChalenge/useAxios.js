import axios from "axios";
import {useEffect, useState} from "react";

const FetchRandomData = () => {
    return axios
        .get('https://randomuser.me/api')
        .then(({data}) => {
            console.log(data)
            return JSON.stringify(data, null, 2);
        })
        .catch(err => {
            console.log(err)
            alert('Data fetching error')
        })
}

export default function useAxios() {
    const [userDataJson, setUserDataJson] = useState('');

    useEffect(() => {
        FetchRandomData().then(data => {
            setUserDataJson(data || 'No user data found')
        })
    }, [])

    return (
        <pre>
            {userDataJson}
        </pre>
    )
}
