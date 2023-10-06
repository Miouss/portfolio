import { useEffect } from "react";

import {
  ProjectBackground,
  ProjectContainer,
  Content,
  Title,
  Description,
  TechContainer,
  TechItem,
  RedirectContainer,
  Details,
  TechTitle,
  TechItemsContainer,
  Subcontent,
  TechItemIcon,
  TechItemName,
  Options,
  HidePreviewButton,
  PreviewButton,
  Project,
} from "../../styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useState } from "react";
import {
  VisibilityOffIcon,
  VisibilityOnIcon,
  GithubIcon,
  RedirectIcon,
} from "../../assets";

import { UndefinedBoolean } from "../../types";
import RedirectItem from "./ProjectsContentRedirectItem";
import { useLangContext } from "../../hooks";

interface Tech {
  name: string;
  icon: JSX.Element;
}
interface ProjectDescription {
  fr: string;
  eng: string;
}

interface Props {
  name: string;
  description: ProjectDescription;
  url: string;
  repo: string;
  techs: Tech[];
  link?: string;
}

export default function ContentBuilder({
  name,
  description,
  url,
  repo,
  techs,
  link,
}: Props) {
  const [showPreview, setShowPreview] = useState<UndefinedBoolean>(undefined);
  const [showVideo, setShowVideo] = useState(false);

  const fsresp = useSelector((store: RootState) => store.windowResponsiveFont);

  const TechItems = techs.map((tech, i) => (
    <TechItem key={`${tech}${i}`}>
      <TechItemIcon>{tech.icon}</TechItemIcon>
      <TechItemName>{tech.name}</TechItemName>
    </TechItem>
  ));

  const { lang } = useLangContext();

  const handleShowVideo = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadeInGallery") setShowVideo(true);
  };

  const handleRemoveVideo = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadeOutGallery") setShowVideo(false);
  };

  useEffect(() => {
    if (fsresp < 12 && showPreview) setShowPreview(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fsresp]);

  return (
    <ProjectContainer showVideo={showVideo}>
      <ProjectBackground
        visible={showPreview}
        onAnimationStart={handleShowVideo}
        onAnimationEnd={handleRemoveVideo}
      >
        <HidePreviewButton
          visible={showPreview}
          onClick={() => setShowPreview(false)}
        >
          <VisibilityOnIcon color="red" />
        </HidePreviewButton>
        <ProjectVideo url={url} showVideo={showVideo} />
      </ProjectBackground>
      <Content aspectratio={showPreview ? "16/9" : "unset"}>
        <Project hide={showPreview}>
          <Title fsresp={fsresp}>{name}</Title>
          <Subcontent>
            <Details>
              <Description fsresp={fsresp}>{description[lang]}</Description>
              <TechContainer>
                <TechTitle fsresp={fsresp}>Technologies :</TechTitle>
                <TechItemsContainer fsresp={fsresp}>
                  {TechItems}
                </TechItemsContainer>
              </TechContainer>
            </Details>
            <Options>
              <PreviewButton onClick={() => setShowPreview(true)}>
                <VisibilityOffIcon />
              </PreviewButton>

              <RedirectContainer fsresp={fsresp}>
                <RedirectItem
                  redirect={repo}
                  Icon={<GithubIcon />}
                  fsresp={fsresp}
                />
                <RedirectItem
                  redirect={link as string}
                  Icon={<RedirectIcon />}
                  fsresp={fsresp}
                />
              </RedirectContainer>
            </Options>
          </Subcontent>
        </Project>
      </Content>
    </ProjectContainer>
  );
}

function ProjectVideo({
  url,
  showVideo,
}: {
  url: string;
  showVideo: UndefinedBoolean;
}) {
  if (!showVideo) return null;

  return <iframe width="100%" height="100%" src={url} allowFullScreen />;
}
