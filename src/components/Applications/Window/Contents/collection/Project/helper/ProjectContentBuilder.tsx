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
  Link,
  TechTitle,
  TechItemsContainer,
  Subcontent,
  LinkIcon,
  LinkTitle,
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
  PreviewLabel,
  PreviewButton,
  PreviewIcon,
  PreviewButtonContainer,
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

import languages from "../../../../../../../assets/languages/languages.json";
import { LanguageStateContext } from "../../../../../../App";
import { changeSliderImage } from "./changeSliderImage";

interface Tech {
  name: string;
  icon: JSX.Element;
}

interface Props {
  name: string;
  description: string;
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
  const [showGallery, setShowGallery] = useState<boolean | undefined>(
    undefined
  );
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

  console.log(`Image One is sliding with animation: ${animImageOne}`);
  console.log(`Image Two is sliding with animation: ${animImageTwo}`);
  console.log(`Image Three is sliding with animation: ${animImageThree}`);

  return (
    <ProjectContainer>
      <BackgroundLayer>
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
      <Content showGallery={showGallery} fsresp={fsresp}>
        <Chevrons showGallery={showGallery}>
          <HidePreviewButton onClick={() => setShowGallery(false)}>
            <VisibilityOffIcon
              color={name === "Smart Dl" ? "white" : "black"}
            />
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
        <ProjectContent fsresp={fsresp}>
          <Title fsresp={fsresp}>{name}</Title>
          <Subcontent fsresp={fsresp}>
            <Details>
              <Description fsresp={fsresp}>{description}</Description>
              <TechContainer>
                <TechTitle fsresp={fsresp}>Technologies :</TechTitle>
                <TechItemsContainer fsresp={fsresp}>
                  {TechItems}
                </TechItemsContainer>
              </TechContainer>
            </Details>
            <Options>
              <PreviewButtonContainer fsresp={fsresp}>
                <PreviewButton onClick={() => setShowGallery(true)}>
                  <PreviewLabel>{languages[lang].actions.preview}</PreviewLabel>
                  <PreviewIcon>
                    <VisibilityOnIcon />
                  </PreviewIcon>
                </PreviewButton>
              </PreviewButtonContainer>

              <RedirectContainer fsresp={fsresp}>
                <RedirectItem fsresp={fsresp}>
                  <Link href={`${link}`}>
                    <LinkIcon>
                      <RedirectIcon />{" "}
                    </LinkIcon>
                    <LinkTitle>
                      {languages[lang].actions.redirect.website}
                    </LinkTitle>
                  </Link>
                </RedirectItem>
                <RedirectItem fsresp={fsresp}>
                  <Link href={`${repo}`}>
                    <LinkIcon>
                      <GithubIcon />{" "}
                    </LinkIcon>
                    <LinkTitle>
                      {languages[lang].actions.redirect.github}
                    </LinkTitle>
                  </Link>
                </RedirectItem>
              </RedirectContainer>
            </Options>
          </Subcontent>
        </ProjectContent>
      </Content>
    </ProjectContainer>
  );
}
