import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rosebud Digital Inc. ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'rosebud.digital', // e.g: Welcome to my website
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
  paragraphOne:
    'Rosebud Digital Inc. is focused on creating relevant and engaging online experiences.',
  paragraphTwo: "We have recently launched PerilAi.net, the future of risk management.",
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'perilai.png',
    title: 'PerilAi',
    info: 'Your trusted strategy risk assessment tool powered by AI.',
    info2:
      "PerilAi was created to modernize risk assessment user powerful AI models fine tuned for risk analysis, threat intelligence and incident response assistance",
    url: 'https://perilai.net/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hiringcyber.png',
    title: 'HiringCyber.com',
    info: 'The best source for cyber security careers',
    info2: "",
    url: 'https://hiringcyber.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'datacareers.png',
    title: 'HiringCyber.com',
    info: 'The best source for data science careers',
    info2: "",
    url: 'https://datacareers.io',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to chat? Awesome',
  btn: '',
  email: 'paul@rosebud.digital',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: 'https://twitter.com/PaulBriar',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: 'https://www.linkedin.com/in/paulbriar/',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: 'https://github.com/PaulBriar',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
