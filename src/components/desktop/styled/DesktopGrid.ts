import styled from "@mui/system/styled";
import { Stack } from "@mui/material";

export const DesktopGridContainer = styled(Stack)({
    height: "calc(100% - 45px)",
    flexWrap: "wrap",
    overflow: "hidden", 
    "& > *":   {
        flexBasis: "10% !important",
        height: "16%",
    },
    marginRight: "1rem",
});

DesktopGridContainer.defaultProps = {
    direction: "row",
};

export const DesktopEmptyGridItem = styled(Stack)({
    backgroundColor: "transparent",
});