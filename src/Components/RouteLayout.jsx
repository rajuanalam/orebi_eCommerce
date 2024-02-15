import Header from './Layouts/Home/Header'
import Footer from './Layouts/Home/Footer'
import { Outlet } from 'react-router-dom'
import Category from './Layouts/Home/Category'

const RouteLayout = () => {
  return (
    <>
    <Header/>
    <Category />
    <Outlet />
    <Footer />
    </>
  )
}

export default RouteLayout