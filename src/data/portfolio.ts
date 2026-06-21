import {
  FaAngular,
  FaBootstrap,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiCss,
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVscodium,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export const profile = {
  name: 'Assem Mohamed',
  title: 'Full Stack Developer',
  githubUser: 'assemmohamed1677',
  email: 'assemmohamed6600@gmail.com',
  location: 'Alexandria, Egypt',
  github: 'https://github.com/assemmohamed1677',
  linkedin: 'https://www.linkedin.com/in/assem-mohamed-dev/',
};

export const navItems = ['About', 'Skills', 'Services', 'Projects', 'GitHub', 'Education', 'Contact'];

export const skills = [
  {
    group: 'Frontend',
    items: [
      ['React', 92],
      ['Angular', 86],
      ['TypeScript', 88],
      ['JavaScript', 91],
      ['HTML5', 95],
      ['CSS3', 92],
      ['Tailwind CSS', 90],
      ['Bootstrap', 84],
      ['Redux', 82],
      ['Responsive Design', 94],
    ],
  },
  {
    group: 'Backend',
    items: [
      ['Node.js', 88],
      ['Express.js', 86],
      ['NestJS', 82],
      ['REST APIs', 90],
      ['JWT Authentication', 88],
      ['Role-based Authorization', 84],
      ['Socket.IO', 78],
    ],
  },
  {
    group: 'Database',
    items: [
      ['MongoDB', 88],
      ['Mongoose', 84],
      ['MySQL', 78],
    ],
  },
  {
    group: 'Tools',
    items: [
      ['Git', 90],
      ['GitHub', 90],
      ['Docker', 72],
      ['Postman', 88],
      ['VS Code', 94],
      ['NPM', 86],
      ['Performance Optimization', 80],
    ],
  },
];

export const services = [
  'Full Stack Web Development',
  'REST API Development',
  'React Applications',
  'Angular Applications',
  'Backend Development',
  'Database Design',
  'Authentication Systems',
  'Responsive UI Development',
  'Bug Fixing',
  'Performance Optimization',
];

export const projects = [
  {
    title: 'StudyTrack',
    description:
      'A modern student management platform that allows students to organize courses, assignments, deadlines, and progress through an intuitive dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: ['Authentication', 'Dashboard', 'CRUD', 'Progress Tracking', 'Responsive UI'],
    variant: 'analytics',
    liveDemo: 'https://github.com/assemmohamed1677',
    githubUrl: 'https://github.com/assemmohamed1677/studytrack',
  },
  {
    title: 'Task Management System',
    description:
      'A collaborative task management platform supporting teams with role-based authentication, project organization, and task tracking.',
    tech: ['Angular', 'NestJS', 'MongoDB'],
    features: ['Authentication', 'Task Boards', 'Project Management', 'Admin Dashboard', 'Role Management'],
    variant: 'kanban',
    liveDemo: 'https://github.com/assemmohamed1677',
    githubUrl: 'https://github.com/assemmohamed1677/task-management-system',
  },
  {
    title: 'E-Commerce System',
    description:
      'A scalable online shopping platform with product catalog, shopping cart, secure authentication, and order management.',
    tech: ['React', 'Express', 'MongoDB', 'Stripe-ready Architecture'],
    features: ['Authentication', 'Cart', 'Wishlist', 'Orders', 'Search', 'Filtering', 'Responsive Design'],
    variant: 'shop',
    liveDemo: 'https://github.com/assemmohamed1677',
    githubUrl: 'https://github.com/assemmohamed1677/e-commerce-system',
  },
  {
    title: 'Hangman Game',
    description: 'A responsive word guessing game with modern animations and score tracking.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    features: ['Animations', 'Responsive', 'Dark Theme', 'Score Tracking', 'Difficulty Levels'],
    variant: 'game',
    liveDemo: 'https://github.com/assemmohamed1677',
    githubUrl: 'https://github.com/assemmohamed1677/hangman-game',
  },
] as const;

export const achievements = [
  ['Projects Completed', 18],
  ['Technologies Learned', 24],
  ['GitHub Repositories', 30],
  ['Hours of Coding', 1600],
  ['Years of Learning', 3],
];

export const techIcons: { label: string; Icon: IconType }[] = [
  { label: 'React', Icon: FaReact },
  { label: 'Angular', Icon: FaAngular },
  { label: 'Node.js', Icon: FaNodeJs },
  { label: 'Express', Icon: SiExpress },
  { label: 'NestJS', Icon: SiNestjs },
  { label: 'MongoDB', Icon: SiMongodb },
  { label: 'MySQL', Icon: SiMysql },
  { label: 'Tailwind', Icon: SiTailwindcss },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'JavaScript', Icon: SiJavascript },
  { label: 'Git', Icon: FaGitAlt },
  { label: 'GitHub', Icon: FaGithub },
  { label: 'Docker', Icon: FaDocker },
  { label: 'Postman', Icon: SiPostman },
  { label: 'JWT', Icon: SiJsonwebtokens },
  { label: 'REST API', Icon: SiExpress },
  { label: 'HTML5', Icon: FaHtml5 },
  { label: 'CSS3', Icon: SiCss },
  { label: 'Bootstrap', Icon: FaBootstrap },
  { label: 'Redux', Icon: SiRedux },
  { label: 'Mongoose', Icon: SiMongoose },
  { label: 'VS Code', Icon: SiVscodium },
];
