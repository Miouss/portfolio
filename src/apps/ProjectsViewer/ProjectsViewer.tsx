import { ProjetPreviewApp } from "../../styles";

import LolMood from "./ProjectsList/LolMood";
import Portfolio from "./ProjectsList/Portfolio";
import SmartDl from "./ProjectsList/SmartDl";

export default function ProjectsViewer() {
  return (
    <ProjetPreviewApp>
      <LolMood />
      <SmartDl />
      <Portfolio />
    </ProjetPreviewApp>
  );
}
