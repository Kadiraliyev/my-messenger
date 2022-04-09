import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <div className={s.posts}>
        <MyPosts
          posts={props.state.posts}
          addNewPost={props.addNewPost}
          newPostText={props.state.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
}

export default Profile;
