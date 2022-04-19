const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';


export let store = {
  _state: {
    messagePage: {
      dialogs: [
        { id: 1, name: "Arman" },
        { id: 2, name: "Kuanar" },
        { id: 3, name: "Dastan" },
        { id: 4, name: "Baqyt" },
        { id: 5, name: "Islam" },
        { id: 6, name: "Alizhan" },
      ],
      messages: [
        { id: 1, message: "one" },
        { id: 2, message: "two" },
        { id: 3, message: "three" },
        { id: 4, message: "four" },
        { id: 5, message: "five" },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, postText: "Hi", likesCount: 10 },
        { id: 2, postText: "How are you?", likesCount: 13 },
        { id: 3, postText: "How old are you?", likesCount: 14 },
        { id: 4, postText: "What's your name?", likesCount: 15 },
        { id: 5, postText: "My name is ", likesCount: 26 },
        { id: 6, postText: "Bye bye", likesCount: 1 },
      ],
      newPostText: "Kazakhstan",
    },
  },
  _callSubscriber() {
    console.log("renderEntireTree from state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addNewPost() {
    let newPost = {
      id: this._state.profilePage.posts.length + 1,
      postText: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        postText: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type:  ADD_POST});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});