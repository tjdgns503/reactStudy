import React, {useState, useEffect} from 'react';

export default function UseEffectTwo({userId }){
    const [user, setUser] = useState(null);
    // useEffect 함수 첫번째 매개변수에는 부수효과함수 , 부수효과함수는 렌더링이 된다음에 실행된다.
    // useEffect 함수 두번째 매개변수에 의존성 배열 추가 , [userId]의 배열의 값이 바뀔때마다 부수효과함수가 실행됨, [] 빈 배열일 경우에는 mount 된 이후 한번만 부수효과함수 실행
    // 의존성 배열에 들어갈 값들은 컴포넌트의 상태값이나 속성값 또는 컴포넌트 내부에서 사용하는 지역변수나 지역함수를 작성해줘야한다. 
    useEffect(() => {
        getUserApi(userId).then(data => setUser(data));
    },[userId]);
    return (
        <div>
            {!user && <p>사용자 정보를 가져오는중...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </div>
    )
}

const USER1 = { name: 'mike', age: 23};
const USER2 = {name: 'jene', age: 31};
function getUserApi(userId) {
    return new Promise(res => {
        setTimeout(()=> {
            res(userId % 2 ? USER1 : USER2)
        }, 500);
    })
}