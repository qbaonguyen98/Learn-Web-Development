const initState = {
  posts: [
    {
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    },
    {
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      id: 2,
      title: "qui est esse"
    },
    {
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
    }
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action);    // click the delete btn and see in console

  if (action.type = 'DELETE_POST') {
    let newPost = state.posts.filter(post => {
      return post.id !== action.id
    })
    return {            // return updated state
      ...state,
      posts: newPost
    }
  }

  return state;
}

export default rootReducer;