import styled from "@mui/system/styled";

export const Content = styled("article")({
  flex: 1,
  
  display: "flex",
  flexDirection: "column",

  backdropFilter: "blur(2px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",

  fontFamily: "Lato",
  fontSize: "18px",
  lineHeight: "22px",
  textAlign: "left",

  "& > *": {
    textShadow: "1px 1px 1px black",
    color: "white",
  },
});

export const Title = styled("h2")({
  fontFamily: "'Lato'",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "4rem",
  lineHeight: "77px",

  paddingLeft: "160px",
  marginBottom: "25px",
});

export const Subcontent = styled("section")({
  flex: 0.8,
  display: "flex",
  flexDirection: "row",
  paddingBottom: "150px",
});

export const Details = styled("section")({
  
  display: "flex",
  flex: 1.6,
  flexShrink: 0,
  flexDirection: "column",

  paddingLeft: "48px",
  paddingRight: "48px",
  paddingTop: "32px",

  background: "rgba(242, 242, 242, 0.6)",
  boxShadow: "1px 2px 2px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(15px)",
});

export const Description = styled("p")({
  display: "flex",

  flex: 1,
  justifyContent: "center",
  alignItems: "center",

  margin: "0",

  fontSize: "1.2rem",
});

export const TechContainer = styled("section")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const TechTitle = styled("h3")({});

export const TechItemsContainer = styled("section")({
  display: "flex",
  width: "50%",
  
  paddingLeft: "96px",
  gap: "1rem",
  paddingBottom: "48px",  

});

export const TechItem = styled("i")({
  display: "flex",
  width: "100px !important",
  flexDirection: "column",

  gap: "0.5rem",
  padding: "1rem",

  background: "rgba(242, 242, 242, 0.5)",

  "& > svg": {
    fontSize: "3rem",
  },
});

export const TechItemIcon = styled("svg")({
  width: "48px",
  height: "48px",

  alignSelf: "center",
});

export const TechItemName = styled("h4")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",

  flex: 1,
  margin: "0",
  fontSize: "1rem",

  fontStyle: "normal",
});

export const RedirectContainer = styled("section")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  alignSelf: "flex-end",
});

export const RedirectItem = styled("button")({
  flex: 1,
  display: "flex",
  width: "100%",
  maxWidth: "300px",

  gap: "1rem",

  border: "1px solid white",

  background: "rgba(255, 255, 255, 0.6)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

  "&:hover": {
    animation: "tranquille 1s ease-in-out infinite",
  },

  "@keyframes tranquille": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});

export const Link = styled("a")({
  display: "flex",
  width: "100%",

  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",

  gap: "1rem",

  textDecoration: "none",
  color: "#333333",

  "& > *": {
    display: "flex",
  },
});

Link.defaultProps = {
  target: "_blank",
  rel: "noreferrer",
};

export const LinkIcon = styled("i")({
  flex: 1,
  justifyContent: "center",
});

export const LinkTitle = styled("h4")({
  flex: 2,
});
