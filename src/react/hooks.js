import React, {useState,useEffect} from 'react';

export default function Hooks() {
    const [count, setCount] = useState(0);
    const onClick = () => {
        setCount(count + 1);
        setCount(count + 1);
    }
    useEffect(() => {
        window.addEventListener('click', onClick);
        return () => window.removeEventListener('click', onClick);
    })
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onClick}>증가</button>
        </div>
    )
}