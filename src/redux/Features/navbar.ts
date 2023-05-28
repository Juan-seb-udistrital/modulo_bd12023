'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface NavbarState {
  planning: boolean
  attendance: boolean
  liquidation: boolean
}

const initialState: NavbarState = {
  planning: true,
  attendance: false,
  liquidation: false
}

export const navbarSlice = createSlice({
  name: 'planning',
  initialState,
  reducers: {
    changeValuePlanning: (state, action) => {
      console.log(state)
      return {
        ...state,
        planning: action.payload
      }
    },
    changeValueAttendance: (state, action) => {
      return {
        ...state,
        attendance: action.payload
      }
    },
    changeValueLiquidation: (state, action) => {
      return {
        ...state,
        liquidation: action.payload
      }
    }
  }
})

export const { changeValuePlanning, changeValueAttendance, changeValueLiquidation } = navbarSlice.actions

export default navbarSlice.reducer
