import styled from "@mui/system/styled";

import { Button, ButtonGroup } from "@mui/material";

export const BarButtonGroupContainer = styled(ButtonGroup)({
    "& > *": {
        border: "none !important",
        cursor: "default !important",
    },
});

export const CloseButtonContainer = styled(Button)({
  "&:hover": {
    "& > *": {
        color: "white !important",
    },
    backgroundColor: "red !important",
  },
});
