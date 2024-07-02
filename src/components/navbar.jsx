import { Link } from "react-router-dom"
import logo from "../pages/landing/image/logo.png"
import K from "../constants"

const NavBar = () => {
    return (
        <div>
            <img src={logo} alt="logo" className="size-[120px]" />
            <div>
                {
                    K.NAVLINKS.map(
                        (item, index) => {
                            return <Link key={index} to={item.path}>{item.name}</Link>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default NavBar