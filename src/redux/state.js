let rerenderEntireTree = () => {
  console.log('renderEntireTree from state')
}

export const state = {
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
};

export const addNewPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    postText: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
} 
