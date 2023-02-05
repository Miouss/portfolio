import { useContext, useEffect } from "react";

import {
  BackgroundLayer,
  ProjectContainer,
  Content,
  Title,
  Description,
  TechContainer,
  TechItem,
  RedirectContainer,
  RedirectItem,
  Details,
  TechTitle,
  TechItemsContainer,
  Subcontent,
  TechItemIcon,
  TechItemName,
  Options,
  ChevronLeft,
  ChevronRight,
  Chevrons,
  ProjectContent,
  ImageOne,
  ImageTwo,
  ImageThree,
  HidePreviewButton,
  PreviewButton,
} from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../redux";
import { useState } from "react";
import {
  VisibilityOffIcon,
  VisibilityOnIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GithubIcon,
  RedirectIcon,
} from "../../../../../../../assets/icons/icons";

import { LanguageStateContext } from "../../../../../../App";
import { changeSliderImage } from "./changeSliderImage";
import { UndefinedBoolean } from "../../../../../../../types/types";

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

  const TechItems = techs.map((tech, i) => (
    <TechItem key={`${tech}${i}`}>
      <TechItemIcon>{tech.icon}</TechItemIcon>
      <TechItemName>{tech.name}</TechItemName>
    </TechItem>
  ));

  const [imageOneAnimKey, setImageOneAnimKey] = useState(0);
  const [imageTwoAnimKey, setImageTwoAnimKey] = useState(1);
  const [imageThreeAnimKey, setImageThreeAnimKey] = useState(2);

  const [animImageOne, setAnimImageOne] = useState("");
  const [animImageTwo, setAnimImageTwo] = useState("");
  const [animImageThree, setAnimImageThree] = useState("");

  const [disableButtons, setDisableButtons] = useState(false);

  const lang = useContext(LanguageStateContext);

  const imgSrc = [
    <img src={imageUrl[0]} alt="image1" />,
    <img src={imageUrl[1]} alt="image2" />,
    <img src={imageUrl[2]} alt="image3" />,
  ];

  const slideAnims = {
    right: ["center-to-left", "right-to-center", "left-to-right"],
    left: ["center-to-right", "right-to-left", "left-to-center"],
  };

  const startAnim = (slideDirection: "left" | "right") => {
    changeSliderImage(
      slideDirection,
      slideAnims[slideDirection],
      imageOneAnimKey,
      setAnimImageOne,
      setImageOneAnimKey
    );
    changeSliderImage(
      slideDirection,
      slideAnims[slideDirection],
      imageTwoAnimKey,
      setAnimImageTwo,
      setImageTwoAnimKey
    );
    changeSliderImage(
      slideDirection,
      slideAnims[slideDirection],
      imageThreeAnimKey,
      setAnimImageThree,
      setImageThreeAnimKey
    );
  };

  useEffect(() => {
    if (fsresp < 12 && showGallery) setShowGallery(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fsresp]);

  return (
    <ProjectContainer>
      <BackgroundLayer visible={showGallery}>
        <ImageOne
          onAnimationStart={() => setDisableButtons(true)}
          onAnimationEnd={() => setDisableButtons(false)}
          anim={animImageOne}
        >
          {imgSrc[0]}
        </ImageOne>
        <ImageTwo anim={animImageTwo}>{imgSrc[1]}</ImageTwo>
        <ImageThree anim={animImageThree}>{imgSrc[2]}</ImageThree>
      </BackgroundLayer>
      <Content fsresp={fsresp}>
        <Chevrons visible={showGallery}>
          <HidePreviewButton onClick={() => setShowGallery(false)}>
            <VisibilityOnIcon />
          </HidePreviewButton>

          <ChevronLeft
            disabled={disableButtons}
            onClick={() => startAnim("left")}
          >
            <ChevronLeftIcon />
          </ChevronLeft>
          <ChevronRight
            disabled={disableButtons}
            onClick={() => startAnim("right")}
          >
            <ChevronRightIcon />
          </ChevronRight>
        </Chevrons>
        <ProjectContent hide={showGallery}>
          <Title fsresp={fsresp}>{name}</Title>
          <Subcontent fsresp={fsresp}>
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
                fsresp={fsresp}
                onClick={() => setShowGallery(true)}
              >
                <VisibilityOffIcon />
              </PreviewButton>

              <RedirectContainer fsresp={fsresp}>
                <RedirectItem
                  fsresp={fsresp}
                  onClick={() => window.open(repo, "_blank")}
                  formTarget="_blank"
                >
                  <GithubIcon />{" "}
                </RedirectItem>
                <RedirectItem
                  fsresp={fsresp}
                  onClick={() => window.open(link, "_blank")}
                  formTarget="_blank"
                >
                  <RedirectIcon />{" "}
                </RedirectItem>
              </RedirectContainer>
            </Options>
          </Subcontent>
        </ProjectContent>
      </Content>
    </ProjectContainer>
  );
}
