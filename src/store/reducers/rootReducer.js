import signUpReducer from './signUpReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    SignUp : signUpReducer,
    Ochoko : {},
    chike : {email : ""},
    bosah : {}
});

export default rootReducer;