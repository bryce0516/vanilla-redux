import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import mac from '../css/mac.jpg'


class Main extends Component {
  state = {
    posts : []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      this.setState({
        posts: response.data.slice(0,10)
      })
    })
  }

  render() {
    console.log(this.props)
    const { posts } = this.state 
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div style={{display:'flex'}}className="post card" key={post.id}>
            <div>
             <img style={{ height:'100%', width:250 }} src={mac} alt="background" />
            </div>
            <div className="card-content">
              <Link to={'/posts/' + post.id}>
                <span className="card-title orange-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
      ) : (
        <div className="center">No posts yet</div>
      )
    return (
      <div className="container">
        <h4 className="center">Main</h4>
        {postList}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }

export default Main