import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';
import cakeReducer from "./feature/cake/CakeSlice"
import icecreamReducer from "./feature/icecream/IceCreamSlice"
import usersReducer from './feature/user/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    // whitelist: ["auth"],
  }
  const rootReducer = combineReducers({ 
   cake:cakeReducer,
        iceCream :icecreamReducer,
        users:usersReducer,
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)
 export const store = configureStore({
    reducer:
        //{ cake:cakeReducer,
        // iceCream :icecreamReducer,
        // users:usersReducer,}
        persistedReducer
        
   
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
 })

 export const persistor = persistStore(store)

 
  
 