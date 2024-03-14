import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducer/authReducer';
import adminAuthReducer from '../Reducer/adminAuthReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    adminAuth: adminAuthReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
