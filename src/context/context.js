import React, {useState} from 'react';
const UserContext = React.createContext('');

export default function App() {
    const [username, setUserName] = useState('mike')
    return (
        <div>
            <UserContext.Provider value="mike">
                <div>상단메뉴</div>
                <Profile />
                <div>하단메뉴</div>
                <input type="text" value={username} onChange={e => setUserName(e.target.value)} />
            </UserContext.Provider>
        </div>
    )
}

function Profile(){
    console.log('a');
    return (
        <div>
            <Greeting />
        </div>
    )
}

function Greeting(){
    return (
        <UserContext.Consumer>
            {username => <p>{`${username}님 안녕하세요`}</p>}
        </UserContext.Consumer>
    )
}