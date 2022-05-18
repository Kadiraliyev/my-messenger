import puff from '../../../img/puff.svg';

const Preloader = () => {
  return (
    <div
      style={{
        background: '#504747',
        position: 'fixed',
        top: '50%',
        left: '50%',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <img src={puff} alt='puff' />
    </div>
  );
};

export default Preloader;
