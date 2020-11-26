import React, {useState } from "react"
import { connect } from "react-redux"
import { actionCreators } from "../store"
import ToDo from "../components/ToDo";
import Ninjas from '../components/Ninjas'
import AddNinjas from '../components/AddNinjas' 


function Home({toDos, addToDo}){
  const [text, setText] = useState("");
  const [name, setName] = useState("Ryu");
  const [age, setAge] = useState(30);
  const [ninjas, setNinjas] = useState([ 
    {name: "Ryu", age: 30, belt:'black', id:1},
    {name: "Yoshi", age: 25, belt:'green', id:2},
    {name: "Crystal", age: 20, belt:'white', id:3}, 
  ])
  const handleClick = e => {
    setName("yoshi")
    setAge(25)
  }
  function onChange(e){
    setText(e.target.value);
  }
  function onSubmit(e){
    e.preventDefault();
    addToDo(text);
    setText("")
  }
  const handleMouseOver = e => {
    console.log(e.target, e.pageX, e)
  }
  
  function handleCopy(e){
    console.log('try being original for once!')
  }
  
  function handleChange(e){
    setName(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log('form submitted', name)
  }
  const addNinja = (ninja) => {
    ninja.id = Math.random();
    // let ninjas = [...ninjas,ninja]
    setNinjas([...ninjas,ninja])
    console.log(ninjas)
  }
  const deleteNinja = (id) => {
    setNinjas(ninjas.filter(ninja => {
      return ninja.id !== id
    }))
  }

  return(

    <>
      <h1 className="center blue-text text-darken-2">To Do</h1>

      <form className="center" onSubmit={onSubmit}>
        <input type= "text" value={text} onChange={onChange}/>
        <button className="btn-floating btn waves-effect waves-light pink">+</button>
      </form>
      <ul>
        {toDos.length ? (toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />))) : (<p className="center">you have no todo's! yay!</p>)
        }
      </ul>
      <h1 className="center blue-text text-darken-2">Hey, ninjas</h1>
      <Ninjas deleteNinja={deleteNinja} ninjas={ninjas} />
      <AddNinjas addNinja={addNinja}/>
      <p className="center pink-text text-darken-2">My name is { name } and I am { age }</p>
      <p className="center pink-text text-darken-2">Random Number : {Math.random() * 10}</p>
      <p className="center pink-text text-darken-2" onCopy={handleCopy}>Copy me!</p>
      <div className="center">
        <button className="waves-effect waves-light btn-small" onClick={handleClick}>Click Me!</button>
        <button className="waves-effect waves-light btn-small" onMouseOver={handleMouseOver}>Hover Me!</button>
      </div>

      <form className="center" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        <button className="waves-effect waves-light btn-small">Submit</button>
      </form>
    </>
  )
}

function mapStateToProps(state){

  return {toDos:state};
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);