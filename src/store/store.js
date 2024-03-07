import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducer/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
   
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
