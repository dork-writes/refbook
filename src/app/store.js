import { configureStore } from '@reduxjs/toolkit'
import referenceSlice from '../slices/referenceSlice'
import searchSlice from '../slices/searchSlice'

export const store = configureStore({
  reducer: {
    refState: referenceSlice,
    search: searchSlice
  },
})