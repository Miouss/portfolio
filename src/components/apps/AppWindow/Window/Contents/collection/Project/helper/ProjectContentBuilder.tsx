import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
import { RootState } from "../../../../../../../../redux";
import { useState } from "react";
import {
  VisibilityOffIcon,
  VisibilityOnIcon,
} from "../../../../../../../../assets/icons/icons";

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

  const [imageOneAnimOrder, setImageOneAnimOrder] = useState(0);
  const [imageTwoAnimOrder, setImageTwoAnimOrder] = useState(2);
  const [imageThreeAnimOrder, setImageThreeAnimOrder] = useState(1);

  const [animImageOne, setAnimImageOne] = useState("");
  const [animImageTwo, setAnimImageTwo] = useState("");
  const [animImageThree, setAnimImageThree] = useState("");

  const [disableButtons, setDisableButtons] = useState(false);

  const imgSrc = [
    <img src={imageUrl[0]} alt="lolmood2" />,
    <img src={imageUrl[1]} alt="lolmood2" />,
    <img src={imageUrl[2]} alt="lolmood2" />,
  ];

  const nextAnimOrder = [
    "slide-left-from-center",
    "swipe-left-to-right",
    "slide-center-from-right",
  ];

  const prevAnimOrder = [
    "slide-right-from-center",
    "swipe-right-to-left",
    "slide-center-from-left",
  ];

  const handleAnimStart = (animOrder) => {
    handleImageOneAnimStart(animOrder);
    handleImageTwoAnimStart(animOrder);
    handleImageThreeAnimStart(animOrder);
  };

  const handleImageOneAnimStart = (animOrder) => {
    setAnimImageOne(animOrder[imageOneAnimOrder]);
    if (imageOneAnimOrder === 2) {
      setImageOneAnimOrder(0);
    } else {
      setImageOneAnimOrder(imageOneAnimOrder + 1);
    }
  };

  const handleImageTwoAnimStart = (animOrder) => {
    setAnimImageTwo(animOrder[imageTwoAnimOrder]);
    if (imageTwoAnimOrder === 2) {
      setImageTwoAnimOrder(0);
    } else {
      setImageTwoAnimOrder(imageTwoAnimOrder + 1);
    }
  };

  const handleImageThreeAnimStart = (animOrder) => {
    setAnimImageThree(animOrder[imageThreeAnimOrder]);
    if (imageThreeAnimOrder === 2) {
      setImageThreeAnimOrder(0);
    } else {
      setImageThreeAnimOrder(imageThreeAnimOrder + 1);
    }
  };

  console.log(fsresp);

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
      <Content showGallery={showGallery}>
        <Chevrons showGallery={showGallery}>
          <HidePreviewButton onClick={() => setShowGallery(false)}>
            <VisibilityOffIcon />
          </HidePreviewButton>
          <ChevronLeft
            disabled={disableButtons}
            onClick={() => handleAnimStart(prevAnimOrder)}
          >
            <ChevronLeftIcon />
          </ChevronLeft>
          <ChevronRight
            disabled={disableButtons}
            onClick={() => handleAnimStart(nextAnimOrder)}
          >
            <ChevronRightIcon />
          </ChevronRight>
        </Chevrons>
        <ProjectContent>
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
                  <PreviewLabel>Voir un aperçu</PreviewLabel>
                  <PreviewIcon>
                    <VisibilityOnIcon />
                  </PreviewIcon>
                </PreviewButton>
              </PreviewButtonContainer>

              <RedirectContainer fsresp={fsresp}>
                <RedirectItem fsresp={fsresp}>
                  <Link href={`${link}`}>
                    <LinkIcon>
                      <LaunchIcon />{" "}
                    </LinkIcon>
                    <LinkTitle> Vers le site web</LinkTitle>
                  </Link>
                </RedirectItem>
                <RedirectItem fsresp={fsresp}>
                  <Link href={`${repo}`}>
                    <LinkIcon>
                      <GitHubIcon />{" "}
                    </LinkIcon>
                    <LinkTitle>Repository GitHub</LinkTitle>
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
