import { Lock, Mail, MailIcon, Phone, UserRound } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-[#000000] flex justify-between py-3 px-[100px]  text-[#C57816]">
            <div className="flex flex-row gap ">
                <a href="email">
                <span className="flex flex-row justify-between gap-x-2">
                    <Mail /> info@stellaevents.com
                </span>
                </a>
                <h1 className="px-[20px]">|</h1>
                <a href="phoneNumber">
                <span className="flex flex-row justify-between gap-x-2">
                    <Phone /> +233 24 123 4567
                </span>
                </a>
            </div>
            <div className="flex flex-row justify-between">
                <a href="register" className="">
                <span className="flex flex-row justify-between gap-x-2">
                    <UserRound/> Register
                </span>
                </a>
                <h1 className="px-[20px]">|</h1>
                <a href="logIn">
                <Link to="/login" className="flex flex-row justify-between gap-x-2">
                    <Lock/> Login
                </Link>
                </a>
            </div>
        </div>
    )
}

export default Header