export const config = {
  portfolio: {
    portfolioLogo: 'Portfolio',
    projectCard: {
      cards: [
        {
          heading: 'FzeeLogBook - Fleet Management App',
          description:
            'A live fleet-management and earnings web app for vehicle owners: 15-column daily logbook with automatic net-earnings and driver-share calculation, Individual and Organization accounts with per-user data on Firestore, document-expiry tracking, PDF reports, Google Drive backup, and a bilingual English/Tamil UI. Built with React, JavaScript and Firebase; deployed on Vercel.',
          animationDelay: '300',
          buttonLink: 'https://fzeelogbook.vercel.app',
          buttonText: 'LIVE SITE',
        },
        {
          heading: 'CRM Application (MERN)',
          description:
            'A full-stack CRM with separate React frontend and Express backend repositories, MongoDB integration through Mongoose, JWT and bcrypt authentication, Axios, Bootstrap, CORS and environment-based configuration.',
          animationDelay: '500',
          buttonLink: 'https://github.com/mbasha661/CRM-FRONTEND',
          buttonText: 'FRONTEND REPO',
          buttonLink2: 'https://github.com/mbasha661/CRM-BACKEND',
          buttonText2: 'BACKEND REPO',
        },
        {
          heading: 'Prelcar - Commercial Vehicle Website',
          description:
            'Responsive frontend content for a collaborative, multi-page commercial vehicle website: product pages, galleries, facilities, contact content and brochure access. Built with HTML, CSS and JavaScript.',
          animationDelay: '700',
          buttonLink: 'https://prelcar.com/vehicle-single-2.html',
          buttonText: 'LIVE PAGE',
          buttonLink2: 'https://github.com/mbasha661/prelcar',
          buttonText2: 'REPOSITORY',
        },
        {
          heading: 'Hashline - Software Services Website',
          description:
            'A responsive GitHub Pages site with About, Projects, Services and Contact sections, presenting software concepts for inventory, improvement tracking and quotation approvals. Built with HTML, CSS, JavaScript and PHP.',
          animationDelay: '900',
          buttonLink: 'https://mbasha661.github.io/Hashline',
          buttonText: 'LIVE SITE',
          buttonLink2: 'https://github.com/mbasha661/Hashline',
          buttonText2: 'REPOSITORY',
        },
      ],
    },
    internships: {
      internship: [
        {
          companyName: 'GUVI',
          role: 'Full Stack Development Program',
          introText: 'Completed',
          duration: 'Completed',
          keyPointOne:
            'Trained in front-end and back-end web development: JavaScript, React, Node.js, Express and MongoDB.',
          keyPointTwo:
            'Built hands-on projects across the stack, including a CRM application with separate frontend and backend repositories.',
          keyPointThree: '',
          keyPointFour: '',
          offsetValue: '0',
        },
        {
          companyName: 'IIT Patna',
          role: 'AI & Machine Learning Certification',
          introText: 'In progress',
          duration: 'In progress',
          keyPointOne:
            'Coursework in artificial intelligence and machine learning.',
          keyPointTwo: '',
          keyPointThree: '',
          keyPointFour: '',
          offsetValue: '-1000',
        },
      ],
    },
  },
};

export default config;
