import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={s.Posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
