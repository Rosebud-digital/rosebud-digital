import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Paul Briar | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'PaulBriar.com', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'Father, husband and Web Developer on the Applications team at VERB Interactive.',
  paragraphTwo: 'My primary focus lately has been data driven web applications built with React',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/paulbriar/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lollipop.png',
    title: 'Take This Lollipop',
    info: 'A reboot of the Emmy winning Take This Lollipop V1 and a zoom call you will never forget',
    info2: '',
    url: 'https://takethislollipop.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'remax.png',
    title: 'Remax Hustle Video Editor',
    info: 'A tool the allows agents to make professional-quality RE/MAX videos',
    info2: '',
    url: 'https://videoeditor.remaxhustle.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pga.png',
    title: 'PGA Tour Experiences',
    info: 'Consumer facing golf booking tool',
    info2: '',
    url: 'https://www.pgatourexperiences.com/book-tee-time',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to chat? Awesome',
  btn: '',
  email: 'me@paulbriar.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/PaulBriar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/paulbriar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/PaulBriar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
