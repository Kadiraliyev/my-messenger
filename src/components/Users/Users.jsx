import React from 'react';
import classes from './User.module.css';
import user_logo from '../../img/user-login.png';
import { NavLink } from 'react-router-dom';

const Users = ({ props, onPageChanged }) => {
  const { pageSize, totalUsersCount } = props;
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={classes.row}>
        {pages.map((p) => {
          if (p <= 10) {
            return (
              <span
                key={p}
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  onPageChanged(p);
                }}
                className={props.currentPage === p ? classes.selectedPage : ''}
              >
                {p}
              </span>
            );
          }
          return null;
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={classes.row}>
          <div>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small ?? user_logo}
                  alt='user'
                  width='50px'
                />
              </NavLink>
            </div>
            {u.followed ? (
              <button
                className={classes.pointer}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={classes.pointer}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div>
            <div>{u.name}</div>
            <div>'u.status'</div>
          </div>
          <div>
            <div>Nur-Sultan</div>
            <div>Kazakhstan</div>
            {/* <div>{u.location.city}</div>
          <div>{u.location.country}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
