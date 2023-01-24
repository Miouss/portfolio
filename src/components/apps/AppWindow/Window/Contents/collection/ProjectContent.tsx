import styled from "@mui/system/styled";

import { Button, Link, Stack } from "@mui/material";

export const ProjectContent = styled(Stack)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backdropFilter: "blur(2px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "1rem",
  "& > *": {
    boxSizing: "border-box",
    textShadow: "1px 1px 1px black",
  },
});

export const ProjectTitle = styled(Stack)({
  width: "100%",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  textShadow: "1px 1px 1px black",
  textAlign: "center",
  padding: "1rem",
  backdropFilter: "blur(2px)",
  borderRadius: "1rem",
  margin: "1rem",
  alignSelf: "center",
  borderBottom: "1px solid white",
});

export const ProjectDescription = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "fontCoeff",
})(({ fontCoeff }: { fontCoeff?: number }) => ({
  flex: 0.5,
  width: "100%",
  fontSize: `${1.5}rem`,
  color: "white",
  textShadow: "1px 1px 1px black",
  textAlign: "center",
  justifyContent: "center",
  backdropFilter: "blur(2px)",
  borderRadius: "1rem",
  padding: "5rem",
  alignSelf: "center",
  borderBottom: "1px solid white",
}));

export const ProjectDetails = styled(Stack)({
  flex: 1,
  width: "100%",
  borderTop: "none",
  borderRadius: "1rem",
});

ProjectDetails.defaultProps = {
  direction: "row",
};

export const ProjectTech = styled(Stack)({
  flex: 1.5,
  justifyContent: "space-evenly",
  alignItems: "center",
  alignSelf: "center",
});

ProjectTech.defaultProps = {
  direction: "row",
};

export const ProjectTechItem = styled(Stack)({
  fontSize: "1.5rem",
  color: "white",
  textAlign: "center",
  gap: "1rem",

  "& > :first-child": {
    fontSize: "5rem",
    alignSelf: "center",
  },
});

export const ProjectRedirect = styled(Stack)({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  alignSelf: "center",
});

export const ProjectRedirectItem = styled(Button)({
  width: "80%",
  color: "white",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  border: "1px solid white",
  borderRadius: "2rem",
});

export const ProjectLink = styled(Link)({
  display: "flex",
  width: "100%",
  color: "white",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  "& > :last-child": {
    fontSize: "0.9rem",
  },
});

ProjectLink.defaultProps = {
  underline: "none",
  target: "_blank",
};
