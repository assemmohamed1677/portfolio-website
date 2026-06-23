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
    title: 'Enterprise Level Task Management',
    description:
      'An Angular task management app with user-specific task lists, modal task creation, completion flow, and browser persistence.',
    tech: ['Angular', 'TypeScript', 'CSS', 'LocalStorage'],
    features: ['User Selection', 'Task CRUD', 'Persistent State', 'Reusable Components', 'Responsive UI'],
    variant: 'kanban',
    liveDemo: 'https://enterprise-level-task-managment-akt.vercel.app/',
    githubUrl: 'https://github.com/assemmohamed1677/enterprise-level-task-managment',
  },
  {
    title: 'Students Management System',
    description:
      'A student directory dashboard for adding, viewing, deleting, and inspecting student records with Angular routing and shared state.',
    tech: ['Angular', 'TypeScript', 'Reactive Forms', 'RxJS'],
    features: ['Student CRUD', 'Details Pages', 'Form Validation', 'Routing', 'Reusable Table'],
    variant: 'analytics',
    liveDemo: 'https://students-managment-system-snowy.vercel.app/home',
    githubUrl: 'https://github.com/assemmohamed1677/students-managment-system',
  },
  {
    title: 'Ticket Management System',
    description:
      'A support dashboard with server status, traffic widgets, ticket creation, expandable ticket details, and completion status.',
    tech: ['Angular', 'TypeScript', 'Forms', 'CSS'],
    features: ['Dashboard Widgets', 'Ticket Creation', 'Status Tracking', 'Content Projection', 'Reusable Controls'],
    variant: 'analytics',
    liveDemo: 'https://ticket-managment-system-alpha.vercel.app/',
    githubUrl: 'https://github.com/assemmohamed1677/ticket-managment-system',
  },
  {
    title: 'Investment Calculator',
    description:
      'An Angular calculator that projects investment growth over time from initial capital, yearly contributions, return rate, and duration.',
    tech: ['Angular', 'TypeScript', 'Angular Forms', 'Signals'],
    features: ['Financial Projection', 'Dynamic Results', 'Currency Formatting', 'Shared Service State', 'Input Constraints'],
    variant: 'analytics',
    liveDemo: 'https://investment-calculator-eight-orpin.vercel.app/',
    githubUrl: 'https://github.com/assemmohamed1677/Investment-Calculator',
  },
  {
    title: 'Hangman Game',
    description:
      'A vanilla JavaScript word guessing game with category hints, sound effects, hangman drawing states, and replay flow.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['DOM Manipulation', 'Random Words', 'Sound Effects', 'Replay Button', 'Responsive Styling'],
    variant: 'game',
    liveDemo: 'https://assemmohamed1677.github.io/Hangman/',
    githubUrl: 'https://github.com/assemmohamed1677/Hangman',
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
