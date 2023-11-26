import { Projects } from "../../styles";

import LolMood from "./ProjectsLolMood";
import Portfolio from "./ProjectsPortfolio";
import SmartDl from "./ProjectsSmartDl";
import Tictactoe from "./ProjectsTictactoe";

export default function ProjectsViewer() {
  return (
    <Projects>
      <LolMood />
      <SmartDl />
      <Tictactoe />
      <Portfolio />
    </Projects>
  );
}
