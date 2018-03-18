import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import * as firebase from "firebase";
import firebaseConfig from "../firebase.config.json";

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, {})
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer
});

const initialState = {};
export default createStoreWithFirebase(rootReducer, initialState);
