const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let message = {
        id: state.messages.length + 1, message: state.newMessageBody,
      }
      state.messages.push(message)
      state.newMessageBody = '';
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
