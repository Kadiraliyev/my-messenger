import s from "./Profile.module.css";
import developPng from "../../img/developer.png";
import Posts from "./Posts/Posts";

function Profile() {
  return (
    <div className={s.content}>
      <div className={s.contentImg}>
        <img src={developPng} alt="" width={"100%"} height={"100%"} />
      </div>
      <div className={s.posts}>
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
