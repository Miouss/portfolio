import ProjectContentBuilder from "./helper/ProjectContent";
import LolMood1 from "../../../../../../../assets/projets/lolmood1.png";
import LolMood2 from "../../../../../../../assets/projets/lolmood2.png";
import LolMood3 from "../../../../../../../assets/projets/lolmood3.png";
import {
  reactSVG,
  phpSVG,
  mysqlSVG,
  muiSVG,
} from "../../../../../../../assets/icons/icons";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export default function LolMood() {
  const name = "LOL MOOD";
  const description = {
    eng: `LoL Mood was my first big project putting my knowledge of React, PHP, and MySQL into practice.
     
    It's a website about the video game League of Legends. The site collects data from ranked games played through Riot Games' public API and stores it in a private database after processing it to have various statistics.
      
     The data is accessible through a private API that I developed in PHP and is used by the website to display the data.
       
      I decided to make this type of site because as a League of Legends player and user of popular sites that do the same thing, I have always been intrigued by how these sites work, which allowed me to brush up on a good portion of my knowledge.`,
    fr: `LoL Mood fût mon premier gros projet mettant en pratique mes connaissances en React, PHP, et MySQL.

      Il s'agit d'un site web concernant le jeu vidéo League of Legends. Le site collecte les données des parties classées jouées via l'API Public de l'éditeur Riot Games et les stockent dans une base de donnée privée en les traitent aupréalables pour avoir divers statistiques.
      
      Les données sont accessibles via une API privée que j'ai développé en PHP et qui est utilisée par le site web pour afficher les données.
      
      J'ai décidé de faire ce type de site car étant moi-même joueur de League of Legends et utilisant des sites populaires qui font la même chose, j'ai toujours été intrigué de la façon dont ces sites fonctionnaient et j'ai donc décidé de me lancer ce qui m'a permis de balayer une bonne partie de mes connaissances.`,
  };
  const imageUrl = [LolMood1, LolMood2, LolMood3];

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
      name={name}
      description={description}
      imageUrl={imageUrl}
      techs={techs}
      repo={repo}
      link={link}
    />
  );
}
