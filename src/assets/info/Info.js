import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Quantin',
  lastName: 'Massias',
  initials: 'QM',
  position: 'developer web',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🍇🍷',
      text: 'based in Bordeaux, France',
    },
    {
      emoji: '👨‍💻📱',
      text: 'Developer Web FullStack & Mobile',
    },
    {
      emoji: '📧📨',
      text: 'massias.quantinpro@gmail.com',
    },
  ],
  socials: [
    {
      link: '', //a modifier
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://www.instagram.com/don_plozed/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/MassiasQuantin',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/quantin-massias-123201268/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Passionné par la technologie et le développement de solutions innovantes, je suis un développeur web full stack formé à la Wild Code School, où j'ai acquis des compétences techniques avancées et une expérience pratique en JavaScript, React, PHP, et Symfony. À travers des projets variés, j'ai développé une forte aptitude en conception et optimisation de bases de données avec MySQL, me permettant de structurer efficacement l'information pour des applications web dynamiques et performantes.",
  skills: {
    Languages: ["MySQL", "SQLite", "PostgreSQL", "MariaDB", "Php", "Symfony", "Laravel", "JavaScript", "React", "Vue.js", "Angular", "Node.js", "TypeScript", "Express.js", "HTML/CSS", "BootStrap", "Tailwind", "sass", "Git"],
    others: ["Basic HTML/CSS", "Open Source Intelligence (OSINT)", "Penetration Testing (Pentest)", "Search Engine Optimization (SEO)"]
  },
  hobbies: [
    {
      label: 'Programation',
      emoji: '👨🏻‍💻',
    },
    {
      label: 'Jeux vidéos',
      emoji: '🎮',
    },
    {
      label: 'Musculation',
      emoji: '🏋️',
    },
    {
      label: 'Musique',
      emoji: '🎧',
    },
    {
      label: 'Cuisiner',
      emoji: '👨🏻‍🍳',
    },
    {
      label: 'Voyage',
      emoji: '🛫',
    }
    
  ],
  portfolio: [
    {
      title: 'Portfolio de Massias Quantin',
      live: '/',
      image: 'https://image.noelshack.com/fichiers/2023/13/4/1680187630-website.png',
    }
  ],
};
