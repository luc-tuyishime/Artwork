import { configureStore } from '@reduxjs/toolkit'
import { ArtApi } from '../services/ArtAPI'
import ArtReducer from '../features/Art'

const store = configureStore({
  reducer: {
    [ArtApi.reducerPath]: ArtApi.reducer,
    Art: ArtReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ArtApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export default store
