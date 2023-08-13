import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchQuery: ''
}
 
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    
    updateQuery: (state, { payload }) =>
    {
        state.searchQuery = payload;
    }
  }
})

export const { updateQuery } = searchSlice.actions

export default searchSlice.reducer