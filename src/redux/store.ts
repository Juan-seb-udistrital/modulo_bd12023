'use client'

import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from '@/redux/Features/navbar'

export const store = configureStore({
  reducer: {
    navbar: navbarSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
