import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <div className={s.posts}>
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
