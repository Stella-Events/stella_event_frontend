import { Outlet } from "react-router-dom"
import NavBar from "../components/navbar"
import Footer from "../components/footer"

const RootLayout = () => {
  return (
    <div>
       <NavBar/>
        <Outlet/>
       <Footer/>
    </div>
  )
}

export default RootLayout