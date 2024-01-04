import { configureStore } from '@reduxjs/toolkit'

// import reducer
import postReducer from '@/lib/redux/slices/postSlices'

// const logger = reduxLogger.createLogger()

const store = configureStore({ // combine reducers
  reducer: {
    post: postReducer,
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch