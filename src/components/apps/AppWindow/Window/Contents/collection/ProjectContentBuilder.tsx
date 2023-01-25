import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Content,
  Title,
  Description,
  TechContainer,
  TechItem,
  RedirectContainer,
  RedirectItem,
  Details,
  Link,
  TechTitle,
  TechItemsContainer,
  Subcontent,
  LinkIcon,
  LinkTitle,
  TechItemIcon,
  TechItemName,
} from "./ProjectContent";
import { BackgroundLayer, ProjectContainer } from "./CvPreview";
import { Box, SvgIcon } from "@mui/material";

interface Tech {
  name: string;
  icon: JSX.Element;
}

interface Props {
  name: string;
  description: string;
  imageUrl: string;
  repo: string;
  techs: Tech[];
  link?: string;
}

export default function ContentBuilder({
  name,
  description,
  imageUrl,
  repo,
  techs,
  link,
}: Props) {
  const TechItems = techs.map((tech, i) => (
    <TechItem key={`${tech}${i}`}>
      <TechItemIcon>{tech.icon}</TechItemIcon>
      <TechItemName>{tech.name}</TechItemName>
    </TechItem>
  ));

  return (
    <ProjectContainer>
      <BackgroundLayer>
        <img src={imageUrl} alt="lolmood" />
      </BackgroundLayer>
      <Content>
        <Title>{name}</Title>
        <Subcontent>
          <Details>
            <Description>{description}</Description>
            <TechContainer>
              <TechTitle>Technologies :</TechTitle>
              <TechItemsContainer>{TechItems}</TechItemsContainer>
            </TechContainer>
          </Details>
          <RedirectContainer>
            <RedirectItem>
              <Link href={`${link}`}>
                <LinkIcon>
                  <LaunchIcon />{" "}
                </LinkIcon>
                <LinkTitle> Vers le site web</LinkTitle>
              </Link>
            </RedirectItem>
            <RedirectItem>
              <Link href={`${repo}`}>
                <LinkIcon>
                  <GitHubIcon />{" "}
                </LinkIcon>
                <LinkTitle>Accéder au repo GitHub</LinkTitle>
              </Link>
            </RedirectItem>
          </RedirectContainer>
        </Subcontent>
      </Content>
    </ProjectContainer>
  );
}
