import ProjectContentBuilder from "../helper/ProjectContentBuilder";
import SmartDlBg from "../../../../../../../../assets/projets/smartdl.png";
import {
  reactSVG,
  nodejsSVG,
  muiSVG,
  expressSVG,
  electronSVG,
} from "../../../../../../../../assets/icons/icons";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export default function SmartDl() {
  const name = "Smart Dl";
  const description = `Smart DL est un projet qui a pour but de faciliter le téléchargement
   de n'importe quelle vidéo d'un provider style Netflix, Disney+, etc.
   Necessitant beaucoup d'espace de stockage (les vidéos sont fragmentées avant d'être assemblées), j'ai décidé d'utiliser Electron JS pour créer une application desktop et exploiter l'espace de stockage de l'utilisateur.
   A la base, cette application avait uniquement pour but
   de télécharger des vidéos de la WWE (d'où son nom actuelle 'wwe-dl'), mais j'ai décidé de l'ouvrir à d'autres providers dans le futur, voyant le potentiel de l'application.
   Ces providers ne mettant pas à disposition d'API, j'ai dû étudier la façon dont fonctionne leur api privé puis j'ai développé un système de scraping pour récupérer les liens de téléchargement des fragments.
   De plus, grâce à la puissance de leur API, j'ai pu récupérer les métadonnées des vidéos et les proposer en téléchargement dans l'application.`;

  const imageUrl = SmartDlBg;

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
      name: "Node",
      icon: nodejsSVG,
    },
    {
      name: "Express",
      icon: expressSVG,
    },
    {
      name: "Electron",
      icon: electronSVG,
    },
  ];

  const repo = "https://github.com/Miouss/wwe-dl";

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
