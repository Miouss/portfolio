import ProjectContentBuilder from "./ProjectsContent";
import {
  reactSVG,
  nodejsSVG,
  muiSVG,
  expressSVG,
  electronSVG,
} from "../../assets";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export default function SmartDl() {
  const name = "Smart DL";
  const description = {
    eng: `Smart DL is a project aimed at making it easier to download any video from a provider like Netflix, Disney+, etc.
    Requiring a lot of storage space, I decided to use Electron JS to create a desktop application and take advantage of the user's storage space.
    
    Initially, this application was only intended to download WWE videos (hence its current name 'wwe-dl'), but I decided to open it up to other providers in the future, seeing the potential of the application.
    
    Since these providers don't provide APIs, I had to study how their private API works and then develop a scraping system to retrieve the download links of the fragments. Additionally, thanks to the power of their API, I was able to retrieve the metadata of the videos and offer them for download in the application.`,
    fr: `Smart DL est un projet qui a pour but de faciliter le téléchargement de n'importe quelle vidéo d'un service de streaming style Netflix, Disney+, etc.
    Nécessitant beaucoup d'espace de stockage, j'ai décidé d'utiliser Electron pour créer une application desktop et exploiter l'espace de stockage de l'utilisateur.
  
    A la base, cette application avait uniquement pour but de télécharger des vidéos de la WWE (d'où son nom actuel 'wwe-dl'), mais j'ai décidé de l'ouvrir à d'autres providers dans le futur, voyant le potentiel de l'application.
  
    Ces services ne mettant pas à disposition d'API, j'ai dû étudier la façon dont fonctionne leur API privé puis j'ai développé un système de scraping pour récupérer les liens de téléchargement des fragments.
    De plus, grâce à la puissance de leur API, j'ai pu récupérer les métadonnées des vidéos et les proposer en téléchargement dans l'application.`,
  };

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

  const link = "https://github.com/Miouss/wwe-dl/releases/tag/v0.1.0";

  return (
    <ProjectContentBuilder
      name={name}
      description={description}
      url="https://www.youtube.com/embed/5hqUIFGVgns"
      techs={techs}
      repo={repo}
      link={link}
    />
  );
}
