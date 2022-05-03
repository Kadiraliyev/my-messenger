import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let messageElement = state.messages.map(el => <Message key={el.id} id={el.id} message={el.message} />)
  let dialogsElement = state.dialogs.map((el) => {
    return <DialogItem key={el.id} name={el.name} id={el.id} />;
  })
  let newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        <div>
          { messageElement }
        </div>
        <div>
          <div>
            <textarea value={newMessageBody}
                      onChange={onMessageChange}
                      placeholder='Enter your message'
            >
            </textarea>
          </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
