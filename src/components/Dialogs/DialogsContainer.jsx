import { connect } from 'react-redux';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStatetToProps = (state) => {
  return {
    dialogsPage: state.dialogPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStatetToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
