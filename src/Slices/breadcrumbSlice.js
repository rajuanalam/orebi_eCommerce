import { createSlice } from '@reduxjs/toolkit'

export const breadcrumbSlice = createSlice({
  name: 'breadcrumbSlice',

  initialState: {

    currentname:"",
    previousname:"",
  },

  reducers: {
    pageName: (state,action) => {
      state.currentname = state.previousname
      state.previousname = action.payload;
    },

  },
})


export const { pageName } = breadcrumbSlice.actions

export default breadcrumbSlice.reducer