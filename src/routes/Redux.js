import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import mac from '../css/mac.jpg'
import {connect} from "react-redux"


class Redux extends Component {
  render() {
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div style={{display:'flex'}}className="post card" key={post.id}>
            <div>
             <img style={{ height:'100%', width:250 }} src={mac} alt="background" />
            </div>
            <div className="card-content">
              <Link to={'/reduxs/' + post.id}>
                <span className="card-title green-text">{post.title}</span>
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
        <h4 className="center">Redux</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Redux)