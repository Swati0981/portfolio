import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.screenshot} alt={props.name} className="project-image" />

      <h2>{props.name}</h2>

      <p><strong>GitHub Repo:</strong> <a href={props.githubRepo} target="_blank" rel="noreferrer">View Repo</a></p>
      <p><strong>Tech Used:</strong> {props.techUsed}</p>
      <p><strong>Short Write-up:</strong> {props.writeUp}</p>
      <p><strong>What the project does:</strong> {props.whatItDoes}</p>
      <p><strong>What I learned:</strong> {props.whatILearned}</p>
      <p><strong>My role:</strong> {props.role}</p>
      <p><strong>Challenges solved:</strong> {props.challenges}</p>
    </div>
  )
}

export default ProjectCard