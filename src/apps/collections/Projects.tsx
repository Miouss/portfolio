import { Projects } from "../../styles";

import LolMood from "./ProjectsLolMood";
import Portfolio from "./ProjectsPortfolio";
import SmartDl from "./ProjectsSmartDl";

export default function ProjectsViewer() {
  return (
    <Projects>
      <LolMood />
      <SmartDl />
      <Portfolio />
    </Projects>
  );
}
