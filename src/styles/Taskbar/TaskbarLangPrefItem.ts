import styled from "@mui/system/styled";
import { propsFilter } from "../propsFilter";

export const LangPrefPopOverMenuItem = styled(
  "button",
  propsFilter("selected", "disabled")
)(({ selected, disabled }: { selected: boolean; disabled: boolean }) => ({
  border: "none",
  background: selected ? "#0768B6" : "transparent",
  color: "white",
  display: "flex",
  gap: "1rem",
  "&:hover": {
    background: disabled
      ? "unset"
      : selected
      ? "#0768B6"
      : "rgba(255, 255, 255, 0.1)",
  },
}));

export const LangPrefPopOverMenuItemCode = styled("h4")({
  flex: 1,
  fontSize: "14px",
});

export const LangPrefPopOverMenuItemLabel = styled("h5")({
  flex: 3,
  textAlign: "left",
  fontSize: "12px",
});
