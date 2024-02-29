

const hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
      <img src="../public/img/profile.png" className="w-44 h-64 mt-8"/>
      <div className="flex flex-row w-screen justify-between absolute h-64 top-15">
        <img src="../public/img/background-sphere-m.png" className="w-48 h-32"/>
        <img src="../public/img/Oval.png" className="mt-20 w-14 h-32" />
      </div>
      
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center tracking-normal mt-6">
            Nice to meet you! I’m <span className="relative">
            Adam Keyes
            <span className="absolute bottom-0 left-0 w-full h-1 bg-green-400"></span>
            </span>. 
            </h2>
            <p className="mt-6 text-center text-base w-mobile-w">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>

            <span className="relative tracking-widest mt-6">
            CONTACT ME
            <span className="absolute bottom-0 left-0 w-full h-1 bg-green-400"></span>
            </span>
        </div>
    </div>
    </div>
  )
}

export default hero
