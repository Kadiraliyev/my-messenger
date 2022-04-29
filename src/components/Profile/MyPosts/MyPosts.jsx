import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';


const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => (
    <Post key={ p.id } post={ p }/>
  ))

  let newPostElement = React.createRef();

  const addNewPost = () => {
    props.addPost()
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div>
      <div className={ s.profileBlock }>
        <h3>My Post</h3>
        <div>
          <textarea
            ref={ newPostElement }
            onChange={ onPostChange }
            value={ props.newPostText }
          ></textarea>
        </div>
        <div>
          <button onClick={ addNewPost }>Send</button>
        </div>
      </div>
      <div className={ s.posts }>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
