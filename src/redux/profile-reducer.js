const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  posts: [
    { ID: 1, POSTTEXT: "HI", LIKESCOUNT: 10 },
    { id: 2, postText: "How are you?", likesCount: 13 },
    { id: 3, postText: "How old are you?", likesCount: 14 },
    { id: 4, postText: "What's your name?", likesCount: 15 },
    { id: 5, postText: "My name is ", likesCount: 26 },
    { id: 6, postText: "Bye bye", likesCount: 1 },
  ],
  newPostText: "Kazakhstan",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1, postText: state.newPostText, likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export default profileReducer;
