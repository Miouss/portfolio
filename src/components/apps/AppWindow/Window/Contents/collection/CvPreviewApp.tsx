import { ProjetPreviewApp } from "./CvPreview";

import ProjectLolMood from "./ProjectLolMood";
import ProjectPortofolio from "./ProjectPortofolio";
import ProjectSmartDl from "./ProjectSmartDl";

export default function CvPreviewAppContent() {
  return (
    <ProjetPreviewApp>
      <ProjectLolMood />
      <ProjectSmartDl />
      <ProjectPortofolio />
    </ProjetPreviewApp>
  );
}
