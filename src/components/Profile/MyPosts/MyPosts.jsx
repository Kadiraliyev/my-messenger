import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state';



const MyPosts = (props) => {
  let newPostElement = React.createRef();

  const addNewPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div>
      <div className={s.profileBlock}>
        <h3>My Post</h3>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Send</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
