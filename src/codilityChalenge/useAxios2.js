import axios from "axios";
import {useEffect, useRef, useState} from "react";

const FetchRandomData = (pageNumber: number) => {
    return axios
        .get(`https://randomuser.me/api?page=${pageNumber}`)
        .then(({data}) => {
            console.log(data);
            return data
        })
        .catch((err) => {
            console.log(err)
            alert('No data received')
        })
}

const App = () => {
    const [userData, setUserData] = useState('');
    const [userInfo, setUserInfo] = useState([]);
    const [nextPageNumber, setNextPageNumber] = useState(1);

    const fetchNewUser = useRef(() => {
    })

    fetchNewUser.current = () => {
        FetchRandomData(nextPageNumber).then((data) => {
            //  setUserData(JSON.stringify(data, null, 2))
            if (data === undefined) return;
            const newUserInfo = [
                ...userInfo,
                ...data.results
            ]

            setUserInfo(newUserInfo);
            setNextPageNumber(data.info.page + 1);
        })
    }

    useEffect(() => {
        fetchNewUser.current();
    }, [])


    return (
        <>
            <pre>
                {userData}
            </pre>
            <div>
                {userInfo.map(el =>
                    <div key={el.id.value}>
                        <p>
                            {el.name.first}
                            {el.name.last}
                        </p>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={el.picture.thumbnail} alt="profile image"/>

                        <button onClick={() => fetchNewUser.current()}>
                            Fetch next user
                        </button>

                    </div>
                )}
            </div>
        </>
    )
}

export default App;
