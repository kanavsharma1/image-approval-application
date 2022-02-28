import { configureStore } from '@reduxjs/toolkit'
import FetchDataReducer from './reduxActions' 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'  

// config for persisting state
const persistConfig = {
  key: 'unsplashImageData',
  storage,
}

const persistedReducer = persistReducer(persistConfig, FetchDataReducer)


//creating a store which we will pass to persistedStore
export  const store =  configureStore({
  reducer: {
   unsplashImageData: persistedReducer
  },
  //this is to get rid of warnings for serializable
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistedStore = persistStore(store)