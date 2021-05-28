import React,{useState} from 'react';
import Title from './title';

export default function Counter() {
    const [count, setCount] = useState({value: 0});
    const onClick = () => {
        setCount({...count, value: count.value + 1});
    }
    return (
        <div>
            <Title title={`현재 값은 ${count.value} 입니다`} />
            <button onClick={onClick}>중가</button>
        </div>
    )
}