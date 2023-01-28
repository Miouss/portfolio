import { ProjetPreviewApp } from "./ProjectPreview";

import ProjectLolMood from "./ProjectLolMood";
import ProjectPortofolio from "./ProjectPortofolio";
import ProjectSmartDl from "./ProjectSmartDl";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../redux";

export default function ProjectPreviewApp() {
  const fsresp = useSelector((store: RootState) => store.windowResponsiveFont);
  
  return (
    <ProjetPreviewApp fsresp={fsresp}>
      <ProjectLolMood />
      <ProjectSmartDl />
      <ProjectPortofolio />
    </ProjetPreviewApp>
  );
}
