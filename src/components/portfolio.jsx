import projectsData from '../data.json'

const portfolio = () => {
  return (
    <>
    <div>
      <div>
        <p>Projects</p>
        <p>CONTACT ME</p>
        </div>
    </div>

<div className="container mx-auto">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {projectsData.map((project) => (
    <div key={project.id} className="bg-black-100 p-4 rounded-lg">
      <img src={project.image} alt={project.title} className="w-full h-auto rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-gray-600 mb-2">Frameworks Used: {project.frameworks_used.join(', ')}</p>
      <div className="flex justify-between">
        <a href={project.view_project} className="text-blue-500 hover:underline">View Project</a>
        <a href={project.view_code} className="text-blue-500 hover:underline">View Code</a>
      </div>
    </div>
  ))}
</div>
</div>
</>
  )
}

export default portfolio
