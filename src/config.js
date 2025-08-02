module.exports = {
  email: 'Subham.in.tech@gmail.com',

  socialMedia: [
    {
      name: 'subbham829584',
      url: 'https://github.com/Subbham829584',
    },
    {
      name: 'Shubham_ydv_11',
      url: 'https://www.instagram.com/shubham_ydv_11?igsh=NzNlN3JlbTB5czYx',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bchiang7',
    },
    {
      name: 'Subham yadav',
      url: 'https://www.linkedin.com/in/subham-yadav-70831a24a/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7',
    },
  ],

  navLinks: [
    {
      name: 'const about = {
  name: 'Mohit Yadav',
  role: 'Full Stack Developer',
  description: [
    'I build clean and efficient web apps using PHP, JavaScript, and AI.',
    'Passionate about creating smart community platforms and health solutions.',
  ],
  resume: 'https://linktoyourresume.pdf',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};
',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: 'const projects = [
  {
    title: 'Smart Campus Management System',
    description: 'A PHP-based platform for managing college tasks, attendance, events.',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    github: 'https://github.com/yourusername/scms',
    external: 'https://scms-demo.vercel.app',
  },
  {
    title: 'Blood Donation Portal',
    description: 'Help donors and patients find each other using geolocation.',
    tech: ['HTML', 'PHP', 'SQL'],
    github: 'https://github.com/yourusername/blood-donation',
    external: 'https://blood-donate-demo.vercel.app',
  },
];
',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
