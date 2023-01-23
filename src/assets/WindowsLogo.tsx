import { SvgIcon } from "@mui/material";

export default function WindowsLogo(props) {
  return <SvgIcon> 
        <svg
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="24px"
      height="24px"
    >
      <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z" />
    </svg>
  </SvgIcon>
}