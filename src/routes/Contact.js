import React, { Component } from 'react'


class Contact extends Component {
  isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a)
    var bProps = Object.getOwnPropertyNames(b)
    console.log(typeof(aProps))
    console.log(typeof(bProps))
    if (aProps.length != bProps.length) {
      return false
    }
    for (var i = 0; i < aProps.length; i++){
      var propName = aProps[i];
      if(a[propName] !== b[propName]) {
        return false
      }
    }
    return true
  }

  
  yoonyear(n){
    while (n%2 == 0) {
      console.log(2)
      n = n/2
    }
    console.log("n1",n)
    for (var i =3; i*i <= n; i = i+2) {

      while (n % i == 0){
        
        console.log(i)
        n = n/i

      }
    }
    console.log("n2",n)
    if (n >2){
      console.log(n)
    }
    console.log("n3",n)
  }


  render(){
    return (
      <div className="container">
        <h4 className="center">{this.isEquivalent({'props1':'test'},{'props1':'test'}) ? 'hellworld': 'noworld'}</h4>
        <h4 className="center">{this.yoonyear(1000)}</h4>
      </div>
    )
  }
}





export default Contact