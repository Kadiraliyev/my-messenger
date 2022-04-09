import s from "./ProfileInfo.module.css";
import developPng from "../../../img/developer.png";

const ProfileInfo = () => {
  return (
    <div className={s.contentImg}>
      <img src={developPng} alt="" width={"100%"} height={"100%"} />
    </div>
  );
};

export default ProfileInfo;