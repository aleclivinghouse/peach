import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import sendReducer from './sendReducer';

export default combineReducers({
  form: formReducer,
  // send: sendReducer
})
