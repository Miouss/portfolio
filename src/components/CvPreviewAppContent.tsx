import DownloadIcon from "@mui/icons-material/Download";
import { Typography, Stack, Fab, Divider, Slide } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useRef, useState }  from 'react';
import CV from "../assets/cv.png";

import "../styles/CvPreviewAppContent.css";

import {
  MuiIcon,
  MysqlIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  StorybookIcon,
} from "../assets/customIcons/icons";

function CvPreviewAppContent() {
    const containerRef = useRef(null);

    const [startTransition, setStartTransition] = useState<boolean>(false);

    useEffect(() => {
        setStartTransition(true);
    }, [containerRef])

  return (
    <>
      <Stack  ref={containerRef} className="cv-preview-app-content" direction={"row"} spacing={3} justifyContent={"center"}>
        <Stack justifyContent="space-around">
          <Slide direction="up" in={startTransition} container={containerRef.current} mountOnEnter unmountOnExit>
            <Stack alignItems="center" justifyContent="center" spacing={3}>
              <Typography variant="h4" component="h2">
                Front End
              </Typography>

              <Stack direction={"row"} spacing={6}>
                <ReactIcon />
                <ReduxIcon />
                <MuiIcon />
                <StorybookIcon />
              </Stack>
            </Stack>
          </Slide>
          <Slide direction="up" in={startTransition} container={containerRef.current} mountOnEnter unmountOnExit>
            <Stack alignItems="center" justifyContent="center" spacing={3}>
              <Typography variant="h4" component="h2">
                Back End
              </Typography>

              <Stack direction={"row"} spacing={6}>
                <MysqlIcon />
                <NodejsIcon />
              </Stack>
            </Stack>
          </Slide>
        </Stack>
        <Divider style={{ alignSelf: "center" }}>
          <ArrowForwardIosIcon />
        </Divider>

        <div id="cv-container">
          <div id="cv-preview">
            <img  src={CV} alt="cv-preview" />
            <Fab id="cv-download-button" color="primary">
            <DownloadIcon />
          </Fab>
          </div>
        </div>
      </Stack>
    </>
  );
}

export default CvPreviewAppContent;
