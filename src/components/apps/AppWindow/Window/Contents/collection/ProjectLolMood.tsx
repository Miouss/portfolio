import ProjectContentBuilder from "./ProjectContentBuilder";
import LolMoodBg from "../../../../../../assets/projets/lolmood.png";
import {
  reactSVG,
  phpSVG,
  mysqlSVG,
  muiSVG
} from "../../../../../../assets/icons/icons";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export default function ProjectLolMood() {
  const name = "LOL MOOD";
  const description = `LoL Mood fût mon premier gros projet mettant en pratique mes
  connaissances en React, PHP, et MySQL. Il s'agit d'un site web
  concernant le jeu vidéo League of Legends. Le site collecte les
  données des parties classées jouées via l'API Public de l'éditeur Riot Games
  et les stockent dans une base de donnée privée et les traitent pour afficher diverses statistiques au joueur.`;
  const image = LolMoodBg;

  const techs: Tech[] = [
    {
      name: "React",
      icon: reactSVG,
    },
    {
        name: "Material UI",
        icon: muiSVG,
    },
    {
      name: "PHP",
      icon: phpSVG,
    },
    {
      name: "MySQL",
      icon: mysqlSVG,
    },
  ];

  const repo = "https://github.com/Miouss/lol-mood-website";

  const link = "https://lolmood.net";

  return (
    <ProjectContentBuilder
      projectName={name}
      projectDescription={description}
      projectImage={image}
      projectTechs={techs}
      projectRepo={repo}
      projectLink={link}
    />
  );
}
