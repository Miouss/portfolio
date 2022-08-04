import { SvgIcon, Stack } from "@mui/material";

import {
  muiSVG,
  mysqlSVG,
  nodejsSVG,
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

export function WindowsIcon(props) {
  return <SvgIcon component={() => windowsSVG(props.color)}></SvgIcon>
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
