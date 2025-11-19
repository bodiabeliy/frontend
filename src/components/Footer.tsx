
import Logo from "../../public/ANIRIYAR_white.svg";


export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center sm:p-3 lg:p-8 ">
      <div className="items-center">
      <img className="sm:scale-50 lg:scale-75" src={Logo.src} alt="" />
      </div>
      <p className="sm:pt-0 lg:pt-2 text-white text-center ">©2024</p>
    </footer>
  )
}
