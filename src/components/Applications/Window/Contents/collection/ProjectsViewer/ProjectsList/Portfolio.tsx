import ProjectContentBuilder from "./helper/ProjectContent";
import Portfolio1 from "../../../../../../../assets/projets/portfolio1.png";
import Portfolio2 from "../../../../../../../assets/projets/portfolio2.png";
import Portfolio3 from "../../../../../../../assets/projets/portfolio3.png";
import {
  reactSVG,
  cssSVG,
  reduxSVG,
} from "../../../../../../../assets/icons/icons";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export default function Portfolio() {
  const name = "Portfolio Windows 10";
  const description = {
    eng: `As a self-taught web developer, the portfolio is the showcase, I had to make a project that stands out from the norm to set myself apart. So I decided to make a portfolio with the behavior of Windows 10.

    The entire project was done from scratch, without pre-fabricated components/features.

    I wanted to stay as close as possible to the OS interface, using the same 
    fonts, colors, icons, etc. The complexity of managing such an interface, particularly the window system, allowed me to discover Redux, 
    to better understand the functioning of React, and greatly improve my skills in all aspects of the front-end.`,
    fr: `Le portfolio étant la vitrine du développeur web autodidacte, je me devais de faire un projet 
    qui sort de la norme afin de me démarquer. J'ai donc décidé de faire un portfolio ayant 
    le comportement de Windows 10.
  
    L'intégralité du projet a été fait from scratch, sans composants/fonctionnalités pré-fabriqués.
    
    J'ai voulu rester le plus fidèle possible à l'interface de l'OS, en utilisant les mêmes 
    polices, les mêmes couleurs, les mêmes icônes, etc. La complexité de gérer une telle interface 
    notamment le systeme de fenêtre m'a permis de découvrir Redux, de mieux comprendre le fonctionnement de React 
    et d'améliorer grandement mes compétences sur tous les aspects du front-end.
    `,
  };
  const imageUrl = [Portfolio1, Portfolio2, Portfolio3];

  const techs: Tech[] = [
    {
      name: "React",
      icon: reactSVG,
    },
    {
      name: "CSS3",
      icon: cssSVG,
    },
    {
      name: "Redux",
      icon: reduxSVG,
    },
  ];

  const repo = "https://github.com/Miouss/portfolio";

  const link = "https://samir-ghabi.com";

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
