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
  paragraphTwo: "We have recently launched Verilocal.ca, Canada's verified buy and sell.",
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'verilocal.png',
    title: 'Verilocal.ca',
    info: 'The verified local marketplace. Verified sellers from your local community.',
    info2:
      "Verilocal was created to provide Canadian's with a safe, scam and fraud free platform to buy and sell new and used items",
    url: 'https://verilocal.ca/',
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
