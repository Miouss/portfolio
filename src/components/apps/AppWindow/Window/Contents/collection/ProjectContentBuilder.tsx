import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTech,
  ProjectTechItem,
  ProjectRedirect,
  ProjectRedirectItem,
  ProjectDetails,
  ProjectLink,
} from "./ProjectContent";
import { BackgroundLayer, ProjectContainer } from "./CvPreview";
import { Box, SvgIcon } from "@mui/material";

interface Tech {
  name: string;
  icon: JSX.Element;
}

interface Props {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectRepo: string;
  projectTechs: Tech[];
  projectLink?: string;
}

export default function ProjectContentBuilder({
  projectName,
  projectDescription,
  projectImage,
  projectRepo,
  projectTechs,
  projectLink,
}: Props) {
  const projectTechItems = projectTechs.map((tech) => (
    <ProjectTechItem>
      <SvgIcon>{tech.icon}</SvgIcon>
      <Box>{tech.name}</Box>
    </ProjectTechItem>
  ));

  return (
    <ProjectContainer>
      <BackgroundLayer>
        <img src={projectImage} alt="lolmood" />
      </BackgroundLayer>
      <ProjectContent>
        <ProjectTitle>{projectName}</ProjectTitle>
        <ProjectDescription>{projectDescription}</ProjectDescription>
        <ProjectDetails>
          <ProjectTech>{projectTechItems}</ProjectTech>
          <ProjectRedirect>
            <ProjectRedirectItem>
              <ProjectLink href={`${projectLink}`}>
                <LaunchIcon /> <Box> Vers le site web</Box>
              </ProjectLink>
            </ProjectRedirectItem>
            <ProjectRedirectItem>
              <ProjectLink href={`${projectRepo}`}>
                <GitHubIcon /> <Box>Accéder au repo GitHub</Box>
              </ProjectLink>
            </ProjectRedirectItem>
          </ProjectRedirect>
        </ProjectDetails>
      </ProjectContent>
    </ProjectContainer>
  );
}
