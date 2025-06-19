/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ravi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ravi Sane Portfolio",
    type: "website",
    url: "http://ravisane.com/",
  },
};

//Home Page
const greeting = {
  title: "Ravi Sane",
  logo_name: "RaviSane",
  nickname: "ravisane",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bxvAhwE8-tkeROl_Wb7McYo5WBHwfRmb/view?usp=sharing",
  portfolio_repository: "https://github.com/ravisane/masterPortfolio",
  githubProfile: "https://github.com/ravisane",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ravisane",
  // linkedin: "https://www.linkedin.com/in/ravi-sane/",
  // gmail: "ravisane37@gmail.com",
  // gitlab: "https://gitlab.com/ravisane",

  {
    name: "Github",
    link: "https://github.com/ravisane",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ravi-sane/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/ravisane37",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ravisane37@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ravisane",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/ravisane37",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/ravi.sane",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "AI & Backend Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designed and deployed AI solutions like recommendation engines, sentiment analysis, and text completion using OpenAI and custom LLMs",
        "⚡ Hands-on with large-scale backend development, webhook systems, cron jobs, and data pipelines",
        "⚡ Proficient in statistical modeling, time-series optimization, and database query enhancements (MongoDB, SQL)",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack & Integration Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built and scaled frontend systems using React.js, Angular, and widget-based UIs",
        "⚡ Developed secure and scalable backend systems with Node.js, Express, and integrated third-party APIs (Klaviyo, Stripe, Mindbody, Clearbit)",
        "⚡ Implemented login systems, billing modules, and integrated cross-platform features (Livechat, ConnectCloud)",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architected scalable and secure systems on AWS, GCP, and Firebase",
        "⚡ Automated deployment pipelines, cron job recovery, and log tracking with tools like PM2, Grafana, and Docker",
        "⚡ Migrated legacy infrastructure and databases (MongoDB 4.4 to 8.0) with zero downtime",
        "⚡ Implemented streaming jobs, serverless functions (Lambda), and billing mechanisms",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Product Design & UX Enhancements",
      fileName: "DesignImg",
      skills: [
        "⚡ Created intuitive and responsive UI/UX flows for enterprise-grade dashboards and chat widgets",
        "⚡ Enhanced user onboarding, feedback systems, and accessibility within product features",
        "⚡ Prototyped and refined interactive components in collaboration with design and QA teams",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/ravisane/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/ravisane",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ravisane",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/ravisane",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ravisane",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/ravisane1",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology, Guwahati",
      subtitle: "M.Tech in Signal Processing and Machine Learning",
      logo_path: "IITG_logo.png",
      alt_name: "IIT Guwahati",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Specialized in Machine Learning, Signal Processing, and Deep Learning techniques.",
        "⚡ Worked on cutting-edge research in ECG-based Myocardial Infarction detection using CNNs, published in NCC 2021.",
        "⚡ Completed a study project on LSTM optimization using Particle Swarm Optimization (PSO) to benchmark DNN performance.",
      ],
      website_link: "https://www.iitg.ac.in/",
    },
    {
      title: "The Maharaja Sayajirao University of Baroda",
      subtitle: "B.E. in Electronics Engineering",
      logo_path: "Msu_baroda_logo.png",
      alt_name: "MSU Baroda",
      duration: "",
      descriptions: [
        "⚡ Built a strong foundation in electronics, signal processing, and systems engineering.",
        "⚡ Developed programming skills and applied them in academic and project-based work in AI and embedded systems.",
        "⚡ Actively participated in research and technical training that bridged electronics with software development.",
      ],
      website_link: "https://www.msubaroda.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in fast-paced product teams driving scalable software architecture, cloud automation, and AI-driven innovations. My experience includes full-stack development, AI systems design, cloud DevOps, and cross-functional team leadership. I also mentor engineers and continuously strive for technical excellence and product reliability.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer / Associate Tech Lead",
          company: "Appy Pie LLP",
          company_url: "https://www.appypie.com/",
          logo_path: "appypie-logo.png",
          duration: "Feb 2023 - Present",
          location: "Noida, India",
          description:
            "Led critical system upgrades including Node.js v14 to v20, AI-powered recommendation engine, and MongoDB 8.0 migration. Architected and deployed scalable backend systems using AWS, Express.js, and Redis. Mentored 6+ developers and executed projects across Livechat, ConnectCloud, and AI Agent Builder.",
          color: "#4CAF50",
        },
        {
          title: "Software Engineer",
          company: "Appy Pie LLP",
          company_url: "https://www.appypie.com/",
          logo_path: "appypie-logo.png",
          duration: "Jul 2021 - Feb 2023",
          location: "Noida, India",
          description:
            "Developed Livechat widget features, integrated APIs (Twilio, Clearbit), and automated system monitoring. Worked across frontend (React), backend (Node.js), Firebase SDK upgrades, and cron job reliability improvements. Delivered high-impact features enhancing chat automation, ticketing, and onboarding.",
          color: "#388E3C",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Intern - Machine Learning",
          company: "Indian Institute of Technology, Guwahati",
          company_url: "https://www.iitg.ac.in/",
          logo_path: "IITG_logo.png",
          duration: "Jul 2020 - Jun 2021",
          location: "Guwahati, India",
          description:
            "Developed deep learning models (CNNs, LSTMs) for ECG-based myocardial infarction detection. Published a peer-reviewed paper in NCC 2021. Explored swarm intelligence methods for neural network optimization.",
          color: "#1E88E5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor & Team Lead - Internal Tech",
          company: "Appy Pie LLP",
          company_url: "https://www.appypie.com/",
          logo_path: "appypie-logo.png",
          duration: "2023 - Present",
          location: "Noida, India",
          description:
            "Mentored junior developers across projects in automation, integrations, and internal DevOps. Shared knowledge on MongoDB optimization, AWS deployment, and cron system design. Actively participated in internal training and innovation initiatives.",
          color: "#00897B",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ecg-mi-detection",
      name: "Detection of Myocardial Infarction from 12 Lead ECG Images",
      createdAt: "2021-06-01T00:00:00Z",
      description:
        "Paper published in the 2021 National Conference on Communications (NCC), Kanpur, India",
      url: "https://doi.org/10.1109/NCC52529.2021.9530154",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ravi.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ravisane.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sector 82, Noida, India",
    locality: "Noida",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "201304",
    streetAddress: "Sector 82",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/rJSdcvBbRTkSoSWQ9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
