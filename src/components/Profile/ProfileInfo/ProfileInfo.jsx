import s from './ProfileInfo.module.css';
import developPng from '../../../img/developer.png';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.contentImg}>
      <img src={developPng} alt='' width={'100%'} height={'100%'} />
      <div style={{ padding: '15px' }}>
        <img src={props.profile.photos.large} alt='' />
        <div>
          <span>{props.profile.fullName}</span>
          <span>{props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
