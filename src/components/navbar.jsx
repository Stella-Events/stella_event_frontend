import { Link } from "react-router-dom"
import logo from "../pages/landing/image/logo.png"
import K from "../constants"
import Header from "./header"

const NavBar = () => {
  return (
    <div className="flex flex-col w-full fixed top-0 left-0 z-50">
      <Header />

      <div className="flex justify-between items-center px-[40px] text-[#333333]  bg-white z-50 w-full">
        <img src={logo} alt="logo" className="size-[100px]" />
        <div className="flex gap-x-20">
          {
            K.NAVLINKS.map(
              (item, index) => {
                return <Link key={index} to={item.path}>{item.name}</Link>
              }
            )

          }
        </div>
      </div>
    </div>

  )
}

export default NavBar