const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, postText: 'Hi', likesCount: 10 },
    { id: 2, postText: 'How are you?', likesCount: 13 },
    { id: 3, postText: 'How old are you?', likesCount: 14 },
    { id: 4, postText: "What's your name?", likesCount: 15 },
    { id: 5, postText: 'My name is ', likesCount: 26 },
    { id: 6, postText: 'Bye bye', likesCount: 1 },
  ],
  newPostText: 'Kazakhstan',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        postText: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export default profileReducer;
