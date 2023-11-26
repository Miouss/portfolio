import ProjectContentBuilder from "./ProjectsContent";
import { reactSVG, nodejsSVG, socketSVG, mongoDBSVG } from "../../assets";

interface Tech {
  name: string;
  icon: JSX.Element;
}

export default function Tictactoe() {
  const name = "Tic-Tac-Toe Multiplayer";
  const description = {
    eng: `Tic-Tac-Toe Multiplayer is a project aimed at improving my skills in NodeJS.

    The interface was intended to be minimalist and user-friendly to allow me to focus on developing backend features.

    The goal was to create a two-player online Tic-Tac-Toe game with account creation and confirmation via email.

    To manage data exchange between players, I used WebSockets with the Socket.io library.
    Regarding player accounts, I implemented authentication using JSON Web Token (JWT) and a MongoDB database to store account information.
    Finally, email confirmation was accomplished using the Nodemailer library.`,
    fr: `Tic-Tac-Toe Multiplayer est un projet visant à améliorer mes compétences sur NodeJS.
    
    L'interface s'est voulu minimaliste et simple d'utilisation pour me concentrer sur le développement des fonctionnalités backends.

    Le but était de créer un jeu de Tic-Tac-Toe jouable à deux joueurs en ligne avec création et confirmation de compte par mail.
    
    Pour gérer les échanges de données entre les joueurs, j'ai utilisé les WebSockets avec la librairie Socket.io.
    Concernant les comptes des joueurs, j'ai créé une authentification par JSON Web Token (JWT) et une base de données MongoDB pour stocker les informations des comptes.
    Enfin la confirmation par mail a été réalisée avec la librairie Nodemailer.`,
  };

  const techs: Tech[] = [
    {
      name: "React",
      icon: reactSVG,
    },
    {
      name: "Socket.io",
      icon: socketSVG,
    },
    {
      name: "MongoDB",
      icon: mongoDBSVG,
    },
    {
      name: "Node",
      icon: nodejsSVG,
    },
  ];

  const repo = "https://github.com/Miouss/tictactoe-online-server";

  const link = "https://github.com/Miouss/tictactoe-online-client";

  return (
    <ProjectContentBuilder
      name={name}
      description={description}
      url="https://www.youtube.com/embed/zu31yRSm77A"
      techs={techs}
      repo={repo}
      link={link}
    />
  );
}
