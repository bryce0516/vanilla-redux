const initState = {
  posts:[
    {id:'1', title:"Squirtle laid andegg", body:' loasdfasfm dskfajsflsjdflksaf'},
    {id:'2', title:"Squirtle laid andegg", body:' loasdfasfm dskfajsflsjdflksaf'},
    {id:'3', title:"Squirtle laid andegg", body:' loasdfasfm dskfajsflsjdflksaf'},
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer