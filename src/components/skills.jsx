import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";







const skills = () => {
    return (
      <div className="sm:items-center sm:justify-center md:items-center flex flex-col justify-center">
        <div className="sm:w-auto mt-12 self-center md: w-10/12
        ">
          <hr className="w-80 h-0.5 mx-auto md:w-11/12 " />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-left lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto md:self-center md:w-11/12">
            <div className="flex flex-col items-center md:items-start text-left">
              <div className="flex flex-col items-center md:items-start">
                <FaHtml5 className="text-orange-500 w-10 h-10 md:mb-2"/>
                <h3 className="text-2xl font-bold md:text-3xl">HTML</h3>
              </div>
              
              <p className= 'md:text-'>2 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">
              <IoLogoCss3 className="text-blue-500 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">CSS</h3>
              </div>
              <p className= 'md:text-'>2 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">
              <SiTailwindcss className="text-blue-500 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">Tailwind</h3>
              </div>
              <p className= 'md:text-'>1 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">            
              <IoLogoJavascript className="text-yellow-400 w-10 h-10 md:mb-2"/>  
              <h3 className="text-2xl font-bold md:text-3xl">Javascript</h3>
              </div>
              <p className= 'md:text-'>2 Years Experience</p>
              

            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">
              <FaReact className="text-blue-300 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">React</h3>
              </div>
              <p className= 'md:text-'>1 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">
              <FaWordpress className="text-blue-400 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">WordPress</h3>
              </div>
              <p className= 'md:text-'>3 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">
              <SiWebflow className="text-blue-400 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">Webflow</h3>
              </div>
              <p className= 'md:text-'>3 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <PiFigmaLogoDuotone className="text-red-400 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">Figma</h3>
              </div>
              <p className= 'md:text-'>4 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <SiAdobephotoshop className="text-indigo-600 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">Adobe Photoshop</h3>
              </div>
              <p className= 'md:text-'>4 Years Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start ">
              <SiAdobeillustrator className="text-yellow-600 w-10 h-10 md:mb-2"/>
              <h3 className="text-2xl font-bold md:text-3xl">Adobe Illustrator</h3>
              </div>
              <p className= 'md:text-'>4 Years Experience</p>
            </div>
          </div>
          <hr className="w-80 h-0.5 mt-10 mx-auto md:w-11/12" />
        </div>
      </div>
    )
  }
  
  export default skills;
  

