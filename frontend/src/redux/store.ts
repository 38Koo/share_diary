import { configureStore } from '@reduxjs/toolkit'
import dateReducer from './date/slice'
import thisMonthDiaryReducer from './thisMonthDiaries/slice'
import todaysDiaryReducer from './todaysDiaries/slice'

export const store = configureStore({
  reducer: {
    fullDate: dateReducer,
    todaysDiaries: todaysDiaryReducer,
    thisMonthDiaries: thisMonthDiaryReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<
  typeof store.getState
>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
