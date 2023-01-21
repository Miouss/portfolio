import DownloadIcon from "@mui/icons-material/Download";
import { Typography, Stack, Fab, Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CV from "../../../assets/cv.png";

import "../../../styles/CvPreviewAppContent.css";

import {
  MuiIcon,
  MysqlIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  StorybookIcon,
  ExpressIcon,
  PhpIcon
} from "../../custom/icons/iconsList";

interface WindowSize {
  width: number;
  height: number;
}

type Direction = "row" | "column";

function CvPreviewAppContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [startTransition, setStartTransition] = useState<boolean>(false);

  const [iconDirection, setIconDirection] = useState<Direction>("row");
  const [skillCardDirection, setSkillCardDirection] = useState<Direction>("column");
  const [skillCardAlignItems, setSkillCardAlignItems] = useState<string>("center");
  const [skillSectionDirection, setSkillSectionDirection] = useState<Direction>("column");
  const [cvPreviewAppDirection, setCvPreviewAppDirection] = useState<Direction>("row");

  const handleResizing = (size: WindowSize) => {
    if(size.width < 600){
      setSkillSectionDirection("column");
    }else if(size.width < 1265){
      setIconDirection("column");

      setSkillCardDirection("column");
      setSkillCardAlignItems("flex-start");

      setSkillSectionDirection("row");
      setCvPreviewAppDirection("column");
    }else{
      setIconDirection("row");

      setSkillCardDirection("column");
      setSkillCardAlignItems("center");

      setSkillSectionDirection("column");
      setCvPreviewAppDirection("row");
    }
  }

  useEffect(() => {
    setStartTransition(true);
  }, [containerRef]);

  useEffect(() => {
    const resizableDiv = containerRef.current!.offsetParent;

    resizableDiv!.addEventListener("resizing", (event: any) => handleResizing(event.detail));
    return () => {
      resizableDiv!.removeEventListener("resizing", (event: any) => handleResizing(event.detail));
    }
  }, []);

  return (
      <Stack
        ref={containerRef}
        className="cv-preview-app-content"
        direction={cvPreviewAppDirection}
        spacing={20}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Stack direction={skillSectionDirection} id="skills-preview"  alignItems={skillCardAlignItems} justifyContent="space-evenly" spacing={10}>
          <Slide
            direction="up"
            in={startTransition}
            container={containerRef.current}
            mountOnEnter
            unmountOnExit
          >
            <Stack direction={skillCardDirection} alignItems="center" justifyContent="center" spacing={3}>
              <Typography variant="h4" component="h2">
                Front End
              </Typography>

              <Stack direction={iconDirection} justifyContent={"space-around"} spacing={8}>
                <ReactIcon />
                <ReduxIcon />
                <MuiIcon />
                <StorybookIcon />
              </Stack>
            </Stack>
          </Slide>
          <Slide
            direction="up"
            in={startTransition}
            container={containerRef.current}
            mountOnEnter
            unmountOnExit
          >
            <Stack direction={skillCardDirection} alignItems="center" justifyContent="center" spacing={3}>
              <Typography variant="h4" component="h2">
                Back End
              </Typography>

              <Stack direction={`${iconDirection}`} justifyContent={"space-around"} spacing={8}>
                <MysqlIcon />
                <NodejsIcon />
                <ExpressIcon />
                <PhpIcon />
              </Stack>
            </Stack>
          </Slide>
        </Stack>

        <div id="cv-preview">
          <img src={CV} alt="cv-preview" />
          <Fab id="cv-download-button" color="primary">
            <DownloadIcon />
          </Fab>
        </div>
      </Stack>
  );
}

export default CvPreviewAppContent;
