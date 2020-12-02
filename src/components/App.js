import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import Main from "../routes/Main";
import Navbar from './Navbar';
import About from '../routes/About';
import Contact from '../routes/Contact';
import Post from '../routes/Post';
import Admin from '../routes/Admin';
import reduxPost from '../routes/reduxPost';
import Ext from '../routes/Ext';
import User from '../routes/User';
import Game from '../routes/Game';
import Calendar from "../routes/Calendar";
import findClient from "../routes/findClient"
import People from "../routes/People"
function App() {
  return (
    <BrowserRouter>
      <div className="App" style={appStyle}>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/home/:id" component={Detail}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/Admin" component={Admin}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/Ext" component={Ext}></Route>
          <Route path="/posts/:post_id" component={Post}></Route>
          <Route path="/reduxs/:post_id" component={reduxPost}></Route>
          <Route path="/User" component={User}></Route>
          <Route path="/Game" component={Game}></Route>
          <Route path="/Calendar" component={Calendar}></Route>
          <Route path="/findClient" component={findClient}></Route>
          <Route path="/People/:name" component={People}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


const appStyle = {
  display:'flex',
  flexDirection:'column'
}

export default App;