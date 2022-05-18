import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     const { userId } = this.props.match.params;
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//       .then((data) => {
//         console.log(data);
//         this.props.setUserProfile(data.data);
//       });
//   }

//   render() {
//     return <Profile {...this.props} profile={this.props.profile} />;
//   }
// }

const ProfileContainer = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId ?? 2}`
      )
      .then((data) => {
        console.log(data);
        props.setUserProfile(data.data);
      });
  }, []);

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
