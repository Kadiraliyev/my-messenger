import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
 
  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {props.state.dialogs.map((el) => {
          return <DialogItem key={el.id} name={el.name} id={el.id} />;
        })}
      </div>
      <div className={s.messages}>
        { props.state.messages.map(el => <Message key={el.id} id={el.id} message={el.message} />)}
      </div>
    </div>
  );
};

export default Dialogs;
