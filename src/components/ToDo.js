import  React  from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({text, onBtnClick, id}) {
  return (
    <li className="center">
      <Link to={`home/${id}`}>
        <div className="collection-item">
          <span onClick={onBtnClick}>{text}</span>        
        </div>
      </Link>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  } 

}

export default connect(null,mapDispatchToProps)(ToDo)