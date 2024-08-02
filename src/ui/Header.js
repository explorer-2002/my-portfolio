import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function Header() {
  return (

    <header className="uppercase px-4 py-3 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-[5px] font-semibold">Sanyam Jain</Link>
      <Navbar />
    </header>
  )
}
