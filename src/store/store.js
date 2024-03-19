import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducer/authReducer';
import adminAuthReducer from '../Reducer/adminAuthReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
  };

const adminAuthPersistConfig = {
    key: 'auth',
    storage,
  };

  const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
  const persistedAdminAuthReducer = persistReducer(adminAuthPersistConfig, adminAuthReducer);

  
const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    adminAuth: persistedAdminAuthReducer,
});

const store = configureStore({
    reducer: rootReducer   
});     

export const persistor = persistStore(store);

export default store;
