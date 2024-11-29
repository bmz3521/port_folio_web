import Link from "next/link"
import DropdownlistMenu from "./DropdownlistMenu";

const Navbar = () => {
  return (
    <nav>
        <div className="
        container 
        flex 
        sm:flex-row
        justify-between
        items-center
        py-4
        sm:flex-row
        sm:items-center
        gap-4
        m-auto
        ">
            <Link 
              href={"/"} 
              className="
              text-4xl 
              font-extrabold 
              text-transparent 
              bg-gradient-to-r 
              from-blue-400 
              via-purple-500 
              to-pink-500 
              bg-clip-text 
              hover:animate-none 
              tracking-widest 
              italic
              ">
              MILO Anurak
              <p className="text-sm">Developer</p>
              
            </Link>
            <DropdownlistMenu />
        </div>
    </nav>
  )
}
export default Navbar