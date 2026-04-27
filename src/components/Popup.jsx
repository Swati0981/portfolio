import './Popup.css'

function Popup({ project, closePopup }) {
  return (
    <div className="popup-background">
      <div className="popup-box">
        <button className="close-btn" onClick={closePopup}>X</button>

        <img src={project.screenshot} alt={project.name} className="popup-image" />

        <h2>{project.name}</h2>

        <p><strong>GitHub Repo:</strong> <a href={project.githubRepo} target="_blank" rel="noreferrer">View Repo</a></p>
        <p><strong>Tech Used:</strong> {project.techUsed}</p>
        <p><strong>Short Write-up:</strong> {project.writeUp}</p>
        <p><strong>What the project does:</strong> {project.whatItDoes}</p>
        <p><strong>What I learned:</strong> {project.whatILearned}</p>
        <p><strong>My role:</strong> {project.role}</p>
        <p><strong>Challenges solved:</strong> {project.challenges}</p>
      </div>
    </div>
  )
}

export default Popup