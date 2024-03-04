

const hero = () => {
  const handleContactClick = () => {
    window.open('mailto:kakyea13@gmail.com');
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row-reverse">
      <img src="../public/img/profile.png" className="w-44 h-64 mt-8 md:w-80 md:h-tab-h lg:w-96"/>
      <div className="flex flex-row w-screen justify-between absolute h-64 top-15">
        <img src="../public/img/background-sphere-m.png" className="w-48 h-32"/>
        <img src="../public/img/Oval.png" className="mt-20 w-14 h-32" />
      </div>
      
        <div className="flex flex-col items-center justify-center md:text-left md:items-start md:w-2/4">
            <h2 className="text-3xl text-center tracking-normal mt-6 md:text-7xl md:text-left">
            Nice to meet you! I’m <span className="relative">
            Kofi Awuette Akyea
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700"></span>
            </span>. 
            </h2>
            <p className="mt-6 text-center text-base w-mobile-w md:text-left md:text-lg">Based in Ghana, I’m a front-end developer passionate about building accessible web apps that users love.</p>

            <span className="relative tracking-widest mt-6 md:text-2xl " onClick={handleContactClick} style={{ cursor: 'pointer' }}>
            CONTACT ME
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700"></span>
            </span>
        </div>
    </div>
    </div>
  )
}

export default hero
