import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { FEATURED_PROJECTS } from '../../PROJECTS';
import './ProjectSection.scss';

/** Homepage featured works: every project flagged `featured`, in `order`. */
export function ProjectSection() {
  return (
    <section className="projects-section section-band">
      <div className="section-head">
        <h2>Recent Works</h2>
        <p className="section-sub">
          Half of this shouldn&apos;t exist. All of it works.
        </p>
      </div>

      <ul className="projects-container card-grid">
        {FEATURED_PROJECTS.map((project) => (
          <li key={project.projectDetails.alias}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
