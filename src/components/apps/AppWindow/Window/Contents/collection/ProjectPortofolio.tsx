import ProjectContentBuilder from "./ProjectContentBuilder";
import PortofolioBG from "../../../../../../assets/projets/portofolio.png";
import {
  reactSVG,
  muiSVG,
  reduxSVG,
} from "../../../../../../assets/icons/icons";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export default function ProjectPortofolio() {
  const name = "Portofolio Windows 10";
  const description = `Le portofolio étant la vitrine du développeur web autodidacte, je me devais de faire un projet 
  qui sort de la norme afin de me démarquer. J'ai donc décidé de faire un portofolio ayant 
  le comportement de Windows 10.
  J'ai voulu rester le plus fidèle possible à l'interface de l'OS, en utilisant les mêmes 
  polices, les mêmes couleurs, les mêmes icônes, etc. La complexité de gérer une telle interface notamment le
  systeme de fenêtre m'a permis de découvrir Redux, de mieux comprendre le fonctionnement de React et
    d'améliorer grandement mes compétences sur tous les aspects du front-end.
  `;
  const imageUrl = PortofolioBG;

  const techs: Tech[] = [
    {
      name: "React",
      icon: reactSVG,
    },
    {
      name: "MUI",
      icon: muiSVG,
    },
    {
      name: "Redux",
      icon: reduxSVG,
    },
  ];

  const repo = "https://github.com/Miouss/lol-mood-website";

  const link = "https://lolmood.net";

  return (
    <ProjectContentBuilder
      name={name}
      description={description}
      imageUrl={imageUrl}
      techs={techs}
      repo={repo}
      link={link}
    />
  );
}
