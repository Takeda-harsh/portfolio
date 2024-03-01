import projectsData from '/public/data.json'

const portfolio = () => {
  return (
    <>
    <div className=' mt-10 w-mobile-m flex items-center justify-center md:mt-24'>
      <div className='w-80 flex justify-between md:w-10/12'>
        <p className='text-3xl font-bold'>Projects</p>
        <span className="relative tracking-widest">
            CONTACT ME
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700"></span>
            </span>
        </div>
    </div>

<div className="container mx-auto mt-6 md:w-10/12 items-center justify-center">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
  {projectsData.map((project) => (
    <div key={project.id} className="bg-black-100 p-4 rounded-lg">
      <img src={project.image} alt={project.title} className="w-full h-auto  mb-4" />
      <h2 className="text-2xl font-semibold mb-3 mt-3">{project.title}</h2>
      <p className="text-grey-500 mb-5">{project.frameworks_used.join('       ')}</p>
      <div className="flex justify-between">
        <a href={project.view_project} className="text-white-500 hover:underline"> <span className="relative tracking-widest">
            VIEW PROJECT
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700"></span>
            </span></a>
        <a href={project.view_code} target='blank' className="text-white-500 hover:underline"><span className="relative tracking-widest">
            VIEW CODE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 "></span>
            </span></a>
      </div>
    </div>
  ))}
</div>
</div>
</>
  )
}

export default portfolio
