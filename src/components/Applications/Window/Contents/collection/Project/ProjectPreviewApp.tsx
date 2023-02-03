import { ProjetPreviewApp } from "./style";

import LolMood from "./ProjectsList/LolMood";
import Portofolio from "./ProjectsList/Portofolio";
import SmartDl from "./ProjectsList/SmartDl";

export default function ProjectPreviewApp() {
  return (
    <ProjetPreviewApp>
      <LolMood />
      <SmartDl />
      <Portofolio />
    </ProjetPreviewApp>
  );
}
