import { configureStore } from '@reduxjs/toolkit'
import infoApi from './features/info/infoApi'

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [infoApi.reducerPath]: infoApi.reducer
      
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(infoApi.middleware),
  })
  // console.log("Redux Store Initial State:", store.getState());

 