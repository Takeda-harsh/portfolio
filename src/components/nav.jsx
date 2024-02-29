import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const nav = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-6 font-bold text-2xl">adamkeyes</h1>
      
        <div className="w-40 items-center justify-center">

      
      <div className="w-40 flex flex-row mt-4 justify-evenly">
        <FaGithub />
        <SiFrontendmentor />
        <FaLinkedin />
        <FaTwitter />
        </div>
        
      </div>
      </div>
    
  )
}

export default nav
