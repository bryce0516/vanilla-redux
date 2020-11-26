import React, {useState} from 'react'

export default function Ext() {
  const [todoList, setTodoList] = useState([])
  const [currentId, setCurrentId] = useState(1)
  const [desc, setDesc] = useState('')
  const [oddList, setOddList] = useState(false)
  const addTodo = () => {
    const todo = {id: currentId, desc: desc}
    setCurrentId(currentId+1)
    setTodoList([...todoList,todo])
  }

  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList)
  }

  console.log(desc)
  return (
    <div className="container">
      <h3>it's Ext</h3>
      <ul> 
      {todoList
        .filter((_,index) => (oddList ? index % 2 === 0 : true))
        .map(todo => (
          <li key={todo.id}>
            <h3>{todo.id}</h3>
            <span>{todo.desc}</span>
            <button data-id={todo.id} onClick={onDelete}>delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={() => setOddList(!oddList)}>Show Odd</button>
    </div>
  )
}
