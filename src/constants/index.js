import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vuejs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    tmEscolar,
    expertos,
    balero,
    dif,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "DB Design",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "IT consultant",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Laravel Full-Stack Developer",
      company_name: "Expertos en Convenciones",
      icon: expertos,
      iconBg: "#383E56",
      date: "Nov 2020 - oct 2023",
      points: [
        "Developing and maintaining web applications using Laravel and other related technologies.",
        "Implementation of a payment gateway called openPay, registrations to different events, chat rooms, consumption of APIs such as vimeo, and zoom, creation of reports and statistics, electronic billing",
        "Implement changes in the design, the architecture of the project, modernizing the platform, improving the performance of this, giving feedback on possible improvements to be implemented in the platform",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Laravel Full-Stack Developer",
      company_name: "Balero Creativo",
      icon: balero,
      iconBg: "#E6DEDD",
      date: "ago 2019 - Feb 2023",
      points: [
        "Provide support to several companies in any technological problem they had",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developing and maintaining web applications using HTML,Wordpress, Javascript,CSS,Laravel and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Dif Zapopan",
      icon: dif,
      iconBg: "#383E56",
      date: "Oct 2022 - Jun 2023",
      points: [
        "Developing and maintaining web applications using Angular.js, React.js, Laravel,Wordpress and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "tmEscolar",
      icon: tmEscolar,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Present",
      points: [
        "Developing and maintaining web application to the administration of toga rental and photo administration of a company that provides services to the UDG ",
        "This administration allows you to upload images, and the algorithms make them organized according to the information in the database, so that they can be separated according to the students and you have better control of sales, the money that comes in, and the sending of the photos to the clients.",
        "using React.js and Laravel and other related technologies, .",
        "Implementing responsive design and ensuring cross-browser compatibility.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "tarjetas de presentacion",
      description:
        "Platform made in Laravel that shows virtual business cards, it contains analytics made natively, and an administrative panel with users, profiles, among other things, the landing page is made with WordPress",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://tarjetas-presentacion.com/",
    },
    {
      name: "Toga rental",
      description:
        "platform to rent togas, register students, photo packages, print tickets, upload images, and the algorithms organize them according to the information in the database, so that they can be separated according to students and you have better control of sales , the money that comes in and the sending of photos to clients.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Platform to DIF Zapopan",
      description:
        "Participate in the creation and updating of several platforms for the DIF Zapopan, including one for procedures, which at the moment is only focused on daycare centers for children.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://tramites.difzapopan.gob.mx/#/auth/login",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };