import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project1.png';
import Work2 from './assets/project2.jpg';
import Work3 from './assets/project3.png';
// import Work4 from './assets/project-4.jpeg';
// import Work5 from './assets/project-5.jpg';
// import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Muhila',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Vijayakumar',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Srilankan',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Jaffna',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '0755364135',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'muhilavijayakumar26@gmail.com',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Tamil (Native), English (Fluent)',
  },
];

export const stats = [
  {
    id: 1,
    no: '6',
    title: 'Months of <br /> Experience',
  },

  {
    id: 2,
    no: '+3',
    title: 'Completed <br /> Projects',
  },

  // {
  //   id: 3,
  //   no: '+10',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2025 Jan-June',
    title: 'Intern - Full Stack Development <span> Coderason </span>',
    desc: 'Gained hands-on experience in full stack development, working on real-world projects and enhancing coding skills.',
  },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'O/L Graduate <span> J/Vadahindu Girls School </span>',
    desc: 'Completed Ordinary Level (O/L) education with a strong academic foundation.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'A/L Graduate <span> J/Vadahindu Girls School </span>',
    desc: 'Completed Advanced Level (A/L) education with a focus on core subjects.',
  },

  {
    id: 4 ,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'HND in Software Engineering <span> BCAS Campus Jaffna </span>',
    desc: 'Earned a Higher National Diploma (HND) in Software Engineering, gaining expertise in software development and IT concepts.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2025',
    title: 'BSc (Hons) Software Engineering <span> ICBT Campus Jaffna  </span>',
    desc: 'Earned a Bachelor of Science (Hons) in Software Engineering, gaining expertise in software development and IT concepts.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 4,
    title: 'MySQL',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Bootstrap5',
    percentage: '85',
  },

  {
    id: 6,
    title: 'Node js',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '75',
  },

  {
    id: 9,
    title: 'Java',
    percentage: '85',
  },

  {
    id: 10,
    title: 'Spring Boot',
    percentage: '70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Web Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Around Lanka Touriusm',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Muhila',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Pos Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Royal Book Shop',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Muhila',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Console Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clinic Appoitment Slot',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Muhila',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  // {
  //   id: 4,
  //   img: Work4,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language : ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
