import React, {useState} from 'react';

export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [currentId, setCurrentId] = useState([]);
    const [desc, setDesc] = useState('');
        
    const onAdd = () => {
        const todo = {id: currentId, desc}
        setCurrentId(currentId + 1);
        setTodoList([...todoList, todo])
    }
    const onDelete = (e) => {
        const id = Number(e.target.dataset.id);
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    }
    const onSaveToServer = () => {}

    return (
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={onDelete}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
            <input type="text" value={''} onChange={e=>setDesc(e.target.value)} />
            <button onClick={onAdd}>추가</button>
            <button onClick={onSaveToServer}>서버에 저장</button>
        </div>
    )
}