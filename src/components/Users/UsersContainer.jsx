import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.toggleIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((data) => {
          console.log(data);
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.data.items);
          this.props.setTotalUsersCount(data.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((data) => {
        console.log(data);
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.data.items);
      });
  };

  render() {
    const { pageSize, totalUsersCount, isFetching } = this.props;
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users props={this.props} onPageChanged={this.onPageChanged} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalUsersCount: (usersCount) => {
//       dispatch(setTotalUsersCountActionCreator(usersCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     },
//   };
// };

const UserContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);

export default UserContainer;
