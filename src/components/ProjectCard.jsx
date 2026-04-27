import './ProjectCard.css'

function ProjectCard({ project, openPopup }) {
  return (
    <div className="project-card" onClick={() => openPopup(project)}>
      <img src={project.screenshot} alt={project.name} className="project-image" />

      <h2>{project.name}</h2>

      <p><strong>Tech Used:</strong> {project.techUsed}</p>
      <p>{project.writeUp}</p>

      <button className="details-btn">View Details</button>
    </div>
  )
}

export default ProjectCard