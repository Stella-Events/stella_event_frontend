import { Outlet } from "react-router-dom"
import NavBar from "../components/navbar"

const RootLayout = () => {
  return (
    <div>
        <Outlet/>
        <NavBar/>
    </div>
  )
}

export default RootLayout