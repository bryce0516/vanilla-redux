import React,{useState, useEffect} from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <div className="container"></div>
      <input type="button" value="remove func" onClick={function(){
        if (funcShow === true){
          setFuncShow(false);
        } else {
          setFuncShow(true);
        }
      }}></input>
            <input type="button" value="remove class" onClick={function(){
        if (classShow === true){
          setClassShow(false);
        } else {
          setClassShow(true);
        }

      }}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp>:null}
      {classShow ? <ClassComp initNumber={2}></ClassComp>:null}

    </>
  );
}
var funcStyle = 'color:blue'
var funcId = 0;

function FuncComp(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  var[_date, setDate ] = useState((new Date()).toString());
  
  useEffect(function(){
    console.log('%cfunc => useEffect (componentDidMount) '+(++funcId),funcStyle);
    document.title = number;
    return function(){
      console.log('%cfunc => useEffect return (componentWillUnMount) '+(++funcId),funcStyle);
    }
  }, [])

  useEffect(function(){
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    document.title = number;
    return function(){
      console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    }

  }, [number])

  useEffect(function(){
    console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    document.title = _date;
    return function(){
      console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    }

  }, [_date])
  return (
    <div className="container">
      <h2>function style componenet</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
        function(){
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="date" onClick={
        function(){
          setDate((new Date()).toString());
        }
      }></input>
    </div>
  )
}

var classStyle = 'color:red'
var classId = 0;

class ClassComp extends React.Component{
  state = {
    number:this.props.initNumber,
    date:(new Date()).toString()
  }
  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  render(){
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style componenet</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date()).toString()})
          }.bind(this)
        }></input>

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
