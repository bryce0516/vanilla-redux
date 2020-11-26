import React, { Component } from 'react'

export default class Ninjas extends Component {
  render() {

    const {ninjas, deleteNinja} = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja center blue-text text-darken-2" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button style={{ paddingLeft: 5,paddingRight: 5 }} className="btn-small waves-effect waves-light" onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
        </div>
      )
    })
    return (
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
  }
}