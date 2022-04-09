import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div>{props.post.postText}</div>
      <div>{props.post.likesCount} likes</div>
    </div>
  );
};

export default Post;
