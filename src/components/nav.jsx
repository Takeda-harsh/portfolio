import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const nav = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex">
      <div className="md:flex md:flex-row md:justify-between md:w-10/12 md:items-center">

      
      <h1 className="mt-6 font-bold text-2xl">kofiakyea</h1>
      
        <div className="w-40 items-center justify-center">

      
      <div className="w-40 flex flex-row mt-4 justify-evenly">
        <a href="https://github.com/Takeda-harsh" target="blank"><FaGithub /></a>
        <a href="#"><SiFrontendmentor /></a>
        <a href="https://www.linkedin.com/in/kofi-akyea/" target="blank"><FaLinkedin /></a>
        <a href="https://x.com/kaytech_?s=09" target="blank"><FaTwitter /></a>
        </div>
        
      </div>
      </div>
      </div>
    
  )
}

export default nav
