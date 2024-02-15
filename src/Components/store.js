import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Slices/counterSlice'
import  breadcrumbSlice  from '../Slices/breadcrumbSlice'
import cartSlices from '../Slices/cartSlices'



export default configureStore({
  reducer: {
    alamin : counterSlice,
    breadcrumb : breadcrumbSlice,
    addCart: cartSlices,
  },

})