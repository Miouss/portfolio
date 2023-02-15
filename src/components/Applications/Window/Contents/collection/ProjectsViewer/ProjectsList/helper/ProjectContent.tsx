import { useEffect } from "react";

import {
  BackgroundLayer,
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
  SliderControls,
} from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../../redux";
import { useState } from "react";
import {
  VisibilityOffIcon,
  VisibilityOnIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GithubIcon,
  RedirectIcon,
} from "../../../../../../../../assets/icons/icons";

import { UndefinedBoolean } from "../../../../../../../../types/types";
import SliderImage from "./SliderImage/SliderImage";
import ChevronOriented from "./ChevronOriented/ChevronOriented";
import RedirectItem from "./RedirectItem/RedirectItem";
import { UndefinedDirection } from "./types";
import useLangContext from "../../../../../../../../hooks/useLangContext";

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
  imageUrl: string[];
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
  const [showGallery, setShowGallery] = useState<UndefinedBoolean>(undefined);
  const fsresp = useSelector((store: RootState) => store.windowResponsiveFont);
  const [triggerAnimDirection, setTriggerAnimDirection] =
    useState<UndefinedDirection>(undefined);

  const TechItems = techs.map((tech, i) => (
    <TechItem key={`${tech}${i}`}>
      <TechItemIcon>{tech.icon}</TechItemIcon>
      <TechItemName>{tech.name}</TechItemName>
    </TechItem>
  ));

  const [disableButtons, setDisableButtons] = useState(false);

  const { lang } = useLangContext();

  useEffect(() => {
    if (fsresp < 12 && showGallery) setShowGallery(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fsresp]);

  useEffect(() => {
    if (!disableButtons) setTriggerAnimDirection(undefined);
  }, [disableButtons]);

  return (
    <ProjectContainer>
      <BackgroundLayer visible={showGallery}>
        <SliderImage
          triggerAnimDirection={triggerAnimDirection}
          imageUrl={imageUrl[0]}
          nthImage={0}
          translationOffset={0}
          setDisableButtons={setDisableButtons}
        />
        <SliderImage
          triggerAnimDirection={triggerAnimDirection}
          imageUrl={imageUrl[1]}
          nthImage={1}
          translationOffset={100}
          setDisableButtons={setDisableButtons}
        />
        <SliderImage
          triggerAnimDirection={triggerAnimDirection}
          imageUrl={imageUrl[2]}
          nthImage={2}
          translationOffset={-100}
          setDisableButtons={setDisableButtons}
        />
      </BackgroundLayer>
      <Content aspectratio={showGallery ? "16/9" : "unset"}>
        <SliderControls visible={showGallery}>
          <HidePreviewButton onClick={() => setShowGallery(false)}>
            <VisibilityOnIcon />
          </HidePreviewButton>
          <ChevronOriented
            setTriggerAnimDirection={setTriggerAnimDirection}
            disableButtons={disableButtons}
            direction="left"
            icon={<ChevronLeftIcon />}
          />
          <ChevronOriented
            setTriggerAnimDirection={setTriggerAnimDirection}
            disableButtons={disableButtons}
            direction="right"
            icon={<ChevronRightIcon />}
          />
        </SliderControls>
        <Project hide={showGallery}>
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
              <PreviewButton
                onClick={() => setShowGallery(true)}
              >
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
