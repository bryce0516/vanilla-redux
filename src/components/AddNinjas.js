import React, { Component } from 'react'

export default class AddNinjas extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
   this.props.addNinja(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{display:"flex"}}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={this.handleChange} />
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" onChange={this.handleChange} />
            <label htmlFor="belt">Belt:</label>
            <input type="text" id="belt" onChange={this.handleChange} />

          </div>
          <div className="center">
            <button className="waves-effect waves-light btn-small">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
