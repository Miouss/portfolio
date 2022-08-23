import { SvgIcon, Stack } from "@mui/material";

import {
  expressSVG,
  linkedinSVG,
  muiSVG,
  mysqlSVG,
  nodejsSVG,
  phpSVG,
  reactSVG,
  reduxSVG,
  storybookSVG,
  windowsSVG
} from "./iconsSVG";

export function MuiIcon() {
  return createIcon(muiSVG, "Material UI");
}

export function MysqlIcon() {
  return createIcon(mysqlSVG, "MySQL");
}

export function NodejsIcon() {
  return createIcon(nodejsSVG, "NodeJS");
}

export function ReactIcon() {
  return createIcon(reactSVG, "React");
}

export function ReduxIcon() {
  return createIcon(reduxSVG, "Redux");
}

export function StorybookIcon() {
  return createIcon(storybookSVG, "StoryBook");
}

export function ExpressIcon(){
  return createIcon(expressSVG, "Express JS");
}

export function PhpIcon(){
  return createIcon(phpSVG, "PHP");
}

export function WindowsIcon(props) {
  return <SvgIcon component={() => windowsSVG(props.color)}></SvgIcon>
}

export function LinkedInIcon({fontSize}) {
  return <SvgIcon component={linkedinSVG} fontSize={fontSize}></SvgIcon>
}

const createIcon = (svg, name: string) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      spacing={1.5}
    >
      <SvgIcon component={svg}></SvgIcon>
        <span>{name}</span>
    </Stack>
  );
};
