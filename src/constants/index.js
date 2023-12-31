import {
  angular,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  recipe,
  starbucks,
  tesla,
  shopify,
  carrent,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'education',
    title: 'Education',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React.js Developer',
    icon: reactjs,
  },
  {
    title: 'Angular.js Developer',
    icon: angular,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const educations = [
  {
    title: 'Full-Stack Developer',
    date: '2023',
    company_name: 'Metropolia University Of Applied Sciences',
    icon: web,
    iconBg: '#383E56',
    points: [
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'SQL/NoSQL(PostgreSQL & MongoDB)',
    ],
  },
  {
    title: 'Web-Developer',
    date: '2021',
    company_name: 'JAMK University Of Applied Sciences',
    icon: web,
    iconBg: '#383E56',
    points: [
      'JavaScript/TypeScript',
      'Angular',
      'Node.js',
      'Express.js',
      'MySQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    title: 'XR-Developer',
    date: '2020',
    company_name: 'JAMK University Of Applied Sciences',
    icon: web,
    iconBg: '#383E56',
    points: ['C++', 'Blender', '3D-Modeling', 'Game-Engines'],
  },
  {
    title: 'Vocational education in information and communication technology',
    date: '2011',
    company_name: 'Jämsä Vocational School',
    icon: web,
    iconBg: '#383E56',
    points: [
      'Information Technology skills, like implementation and counseling of information and communication devices and work tool programs.',
    ],
  },
];

const experiences = [
  {
    title: 'Production Worker',
    company_name: 'Elonen Oy',
    icon: web,
    iconBg: '#383E56',
    date: 'June 2015 - September 2015',
    points: [
      'Quality control',
      'Filling in waybills',
      'Product storage',
      'General bakery production tasks',
    ],
  },
  {
    title: 'Forestry Worker',
    company_name: 'City of Jyväskylä',
    icon: web,
    iconBg: '#383E56',
    date: 'November 2021 - December 2021',
    points: ['Stacking energy tree'],
  },
  {
    title: 'Lumberjack',
    company_name: 'Lisäpalvelu/Koneurakointi Hirvi Oy',
    icon: web,
    iconBg: '#383E56',
    date: 'August 2022 - November 2022',
    points: [
      'Mowing the hay',
      'Use of a clearing saw',
      'Clearing saw maintenance',
    ],
  },
  {
    title: 'A bricklayers apprentice',
    company_name: 'Tmi Kaihula',
    icon: web,
    iconBg: '#383E56',
    date: 'August 2017 - November 2017',
    points: ['Mortar making', 'Stone cutting', 'cleaning of tools'],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "",
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

const projects = [
  {
    name: 'Recipe App',
    description:
      'Recipe application, which allows user to add, edit and delete own recipes. Developed with Angular, Node.js, Express and MongoDB.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: recipe,
    source_code_link: 'https://recipe-app2023.web.app/login',
  },
];

export { services, technologies, experiences, educations, projects };
