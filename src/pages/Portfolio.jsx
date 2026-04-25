import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import './Portfolio.css'

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false)

  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>

      <button
        className="preview-btn"
        onClick={() => setShowProjects(true)}
      >
        Preview My Projects
      </button>

      {showProjects && (
        <div className="projects-list">
          <ProjectCard
            name="Project One"
            screenshot="https://via.placeholder.com/300"
            githubRepo="https://github.com/yourname/project-one"
            techUsed="HTML, CSS, JavaScript"
            writeUp="This was one of my earlier projects where I practiced building a clean layout."
            whatItDoes="It displays useful information in a simple and user-friendly way."
            whatILearned="I learned how to structure a project and improve my frontend skills."
            role="I completed this project by myself."
            challenges="I solved styling and layout problems while making the page responsive."
          />

          <ProjectCard
            name="Project Two"
            screenshot="https://via.placeholder.com/300"
            githubRepo="https://github.com/yourname/project-two"
            techUsed="React, CSS"
            writeUp="This project helped me practice React components and props."
            whatItDoes="It shows dynamic content and separates the UI into reusable parts."
            whatILearned="I learned how to reuse components and pass data with props."
            role="I worked independently on this project."
            challenges="I solved problems related to organizing the code and understanding props."
          />

          <ProjectCard
            name="Project Three"
            screenshot="https://via.placeholder.com/300"
            githubRepo="https://github.com/yourname/project-three"
            techUsed="React, JavaScript, CSS"
            writeUp="This was a portfolio-style project that focused on reusable design."
            whatItDoes="It presents projects in cards with images, text, and links."
            whatILearned="I learned how React components make code cleaner and easier to manage."
            role="I created the design and code myself."
            challenges="I solved issues with displaying different project data in the same component."
          />
        </div>
      )}
    </div>
  )
}

export default Portfolio