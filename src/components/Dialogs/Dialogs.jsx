import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        <div className={s.dialog}>Arman</div>
        <div className={s.dialog}>Kuanar</div>
        <div className={s.dialog}>Dastan</div>
        <div className={s.dialog}>Baqyt</div>
        <div className={s.dialog}>Islam</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>One</div>
        <div className={s.message}>Two</div>
        <div className={s.message}>Three</div>
      </div>
    </div>
  );
};

export default Dialogs;
