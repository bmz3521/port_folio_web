import Link from "next/link"
import { DarkMode } from "./Darkmode"

const Navbar = () => {
  const theme: string = "tracking-widest font-semibold text-lg  hover:text-pink-400 cursor-pointer transition ease-in-out duration-300";
  return (
    <nav>
        <div className="
        container 
        flex 
        flex-col
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
            <div className="flex gap-8 sm:flex-row items-center justify-center font-poppins">
              <h1 className={theme}>Portfolio</h1>
              <h1 className={theme}>Contact</h1>
              <h1 className={theme}>Stack</h1>
              <DarkMode />
            </div>
        </div>
    </nav>
  )
}
export default Navbar