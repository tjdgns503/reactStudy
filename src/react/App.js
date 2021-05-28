import React, {useState} from 'react';
import UseEffectTwo from './useEffect2';

export default function App(){
    const [userId,setUserId] = useState(0);
    return (
        <>
          <UseEffectTwo userId={userId} />
          <button onClick={() => setUserId(userId+1)}>user id 변경</button>
        </>
    )
}