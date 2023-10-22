import { createSlice } from '@reduxjs/toolkit'

// This is a one part of our entire store
export const Art = createSlice({
  name: 'Art',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    // this is also our action creator
    searchArts: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})

export const { searchArts } = Art.actions
export default Art.reducer
