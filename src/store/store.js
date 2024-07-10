import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})
