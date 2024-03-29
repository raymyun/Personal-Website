//import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

import python from '../assets/icons/python.svg';
import cplusplus from '../assets/icons/cplusplus.svg'

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: cplusplus,
        name: "CPlusPlus",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // Add more skills as I become proficient in more skills!
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    /*
    Icon background colors:
    #accbe1
    #fbc3bc
    #b7e4c7
    #a2d2ff
    */
    {
        title: "Head Treasurer",
        company_name: "University of California, Riverside",
        //icon: ,
        iconBg: "#accbe1",
        date: "July 2020 - January 2022",
        points: [
            "Performed weekly and monthly analysis of organization's financial standings, recording proposed budgets and comparing revenue with expenses between terms.",
            "Regularly maintained financial records of organization's cash flow using Microsoft Excel.",
            "Opened the organization's first checking account with university approval, personally authorized account transactions, and oversaw account balance/withdrawals/deposits.",
            "Collaborated with Fundraising Department to propose budget costs of events and to recommend appropriate fees relative to the break-even point to maximize profit.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/raymyun',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/raymyun',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Library System',
        description: 'Using C++, developed a virtual library system with 2 other developers.',
        link: 'https://github.com/raymyun/Library-System',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Web Scraper',
        description: '[Incomplete] Using Python, developed a web scraper.',
        link: 'https://github.com/raymyun/Web-Scraper',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Personal Website',
        description: 'Using Javascript(React) and Tailwind CSS, designed and built a personal website portfolio that is fully responsive.',
        link: 'https://github.com/raymyun/Personal-Website',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'LeetCode Collection',
        description: 'A collection of my solutions to LeetCode problems.',
        link: 'https://github.com/raymyun/LeetCode-Problems',
    },
];