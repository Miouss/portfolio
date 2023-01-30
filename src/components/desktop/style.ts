import styled from "@mui/system/styled";
import { Stack } from "@mui/material";

export const DesktopGridContainer = styled(Stack)({
    height: "calc(100vh - 45px)",
    flexWrap: "wrap",
    overflow: "hidden", 
    "& > *":   {
        flexBasis: "10% !important",
    },
    marginRight: "1rem",

    zIndex: 0,
});

DesktopGridContainer.defaultProps = {
    direction: "row",
};

export const DesktopEmptyGridItem = styled(Stack)({
    backgroundColor: "transparent",
});