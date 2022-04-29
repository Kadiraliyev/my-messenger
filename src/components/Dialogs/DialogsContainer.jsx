import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  const onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return <Dialogs
    updateNewMessageBody={ onMessageChange }
    sendMessage={ onSendMessageClick }
    dialogPage={state}/>;
};

export default DialogsContainer;
