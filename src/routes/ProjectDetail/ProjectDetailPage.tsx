import { useParams } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ProjectTileLarge from '../../components/ProjectTileLarge/ProjectTileLarge';
import NotFound from '../Error/404';
import { getProjectByAlias } from '../../PROJECTS';

/**
 * /portfolio/<alias> - one linkable page per project.
 *
 * Interim body: the existing large tile. The dedicated layout (breadcrumb,
 * text-first case studies) replaces it in the next stage.
 */
export default function ProjectDetailPage() {
  const { alias } = useParams<{ alias: string }>();
  const project = getProjectByAlias(alias);

  useDocumentTitle(project ? project.projectDetails.name : 'Not Found');

  if (!project) {
    return <NotFound />;
  }

  return <ProjectTileLarge project={project} />;
}
