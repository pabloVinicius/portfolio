import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Pablo",
  lastName: "Cruz",
  name: `Pablo Cruz`,
  role: "Senior FullStack Software Engineer",
  avatar: "/images/avatar-2.jpeg",
  email: "vinicius.pablo.18@gmail.com",
  location: "America/Fortaleza",
  languages: ["English", "Portuguese"],
  phone: "5586999014957",
};

const whatsappLink = `https://wa.me/${person.phone}?text=Hey,%20let's%20talk%20about%20a%20project!`;

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: whatsappLink,
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/pabloVinicius",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pablo-cruz-17901a177/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/metadata/pablocruz-metadata.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Turning your ideas into amazing applications. Wherever you are.</>
  ),
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      I'm Pablo, a Senior FullStack Software Engineer from Brazil with 7+ years
      of experience building accessible, scalable, and performant web
      applications.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/vinicius-pablo-18",
  },
  whatsapp: {
    display: true,
    link: whatsappLink,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Senior FullStack Software Engineer with 7+ years of experience
        building performant, accessible, and scalable web interfaces. Passionate
        about modern frontend architecture, design systems, and performance
        optimization. Adept at translating business needs into intuitive digital
        experiences. Experienced in startup environments, cross-functional
        teams, and leveraging AI tools for faster, smarter development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SelectStar",
        timeframe: "2023 - 2025",
        role: "Senior Frontend Engineer",
        achievements: [
          <>
            Re-architected the data lineage and ERD systems using React Flow,
            enabling advanced node interactions, custom styling, and efficient
            parsing of complex datasets.
          </>,
          <>
            Spearheaded a complete UI overhaul, aligning the interface with
            modern UX standards—boosting discoverability of configurations,
            datasets, and documentation.
          </>,
          <>
            Leveraged AI tools, including Cursor, GitHub Copilot, and various
            LLMs (GPT and Anthropic models) to improve development speed, code
            quality, automated refactors, and test coverage.
          </>,
          <>
            Operate in an AI-forward engineering environment where tool-assisted
            workflows are key to improving team efficiency and product velocity.
          </>,
          <>
            Led performance audits and optimizations via Chrome DevTools and
            bundle analysis, reducing app load time and improving
            responsiveness.
          </>,
          <>
            Refactored legacy components and improved modularity and
            maintainability across the codebase.
          </>,
          <>
            Implemented WebWorkers for parsing large datasets asynchronously,
            resulting in significantly faster rendering.
          </>,
          <>
            Co-developed the new Chrome extension using content script
            architecture to improve modularity and cross-page interactions.
          </>,
          <>
            Maintained high test coverage through Jest and React Testing Library
            to ensure stability in production environments.
          </>,
        ],
        images: [
          {
            src: "/images/projects/selects-dashboard.png",
            alt: "Select Star Dashboard Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/selects-lineage.png",
            alt: "Select Star Lineage Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Minded",
        timeframe: "2022 - 2023",
        role: "Frontend Engineer",
        achievements: [
          <>
            Developed web applications for patients and physicians, including
            features for scheduling appointments, prescription management,
            patient follow-ups, and in-app messaging.
          </>,
          <>
            Built and maintained front-end and back-end systems using
            technologies like React, Redux, Context API, Next.js, Nest.js, and
            Styled-Components.
          </>,
          <>
            Improved unit test coverage by 70% using React Testing Library and
            Jest, while optimizing and refactoring codebases.
          </>,
          <>
            Conducted technical discoveries to design and implement scalable
            solutions for new product features.
          </>,
          <>
            Thrived in a dynamic startup environment, adapting to rapid changes
            and ambiguity.
          </>,
        ],
        images: [],
      },
      {
        company: "Kobe - Global Software House",
        timeframe: "2021 - 2022",
        role: "Frontend Engineer",
        achievements: [
          <>
            Developed mobile-first web applications for Agibank, a Brazilian
            digital bank, impacting over 1 million users.
          </>,
          <>
            Created and maintained Agibank's official design system, leveraging
            ReactJS, TypeScript, Rush Monorepo, Tailwind CSS, and WAI-ARIA
            standards to ensure accessible and reusable components.
          </>,
          <>
            Implemented comprehensive testing frameworks, including unit tests
            with React Testing Library, integration and end-to-end tests with
            Cypress, and visual regression tests with Chromatic, ensuring
            component reliability and consistency.
          </>,
          <>
            Led the development of scalable, highly tested mobile-first web apps
            integrated into native iOS and Android platforms, preserving a
            seamless user experience using Next.js, MSW, Context API, and
            Cypress.
          </>,
          <>
            Designed and built backend-for-frontend (BFF) APIs for efficient
            integration with microservices, utilizing NestJS, MongoDB, and
            Jenkins.
          </>,
          <>
            Collaborated with architects to define project designs and
            requirements, ensuring alignment with technical and business goals.
          </>,
        ],
        images: [],
      },
      {
        company:
          "FDTE - Fundação para o Desenvolvimento Tecnológico da Engenharia",
        timeframe: "2020 - 2021",
        role: "Frontend Engineer",
        achievements: [
          <>
            Served as a front-end engineer for Software Express, a Brazilian
            leader in financial and payment technology and part of Fiserv.
          </>,
          <>
            Developed web dashboards for financial reconciliation between credit
            card companies and client businesses using ReactJS, Next.js, Redux,
            Sass, and Storybook.
          </>,
          <>
            Automated end-to-end tests with BDD methodology using WebdriverIO
            and Cucumber, ensuring robust and user-friendly features.
          </>,
          <>
            Designed and prototyped a SaaS platform leveraging micro-frontend
            architecture with Webpack Module Federation.
          </>,
          <>
            Enhanced project performance by implementing caching strategies and
            minimizing unnecessary API calls.
          </>,
          <>
            Contributed to internationalization and analytics tagging using
            Google Analytics and Google Tag Manager.
          </>,
        ],
        images: [],
      },
      {
        company: "GoNuvem",
        timeframe: "2017 - 2020",
        role: "Co-founder and Frontend Engineer",
        achievements: [
          <>
            Contributed to 15+ projects, including SPAs, dashboards, WordPress
            websites, and a complete clinic management system.
          </>,
          <>
            Built and maintained SPAs and Progressive Web Apps leveraging
            technologies like Next.js, WebSockets, WebPush Protocol, GraphQL,
            REST APIs, Redux, and styled-components.
          </>,
          <>
            Implemented CI/CD pipelines using Bitbucket Pipelines for
            streamlined development workflows.
          </>,
          <>
            Deployed and managed applications with hosting and cloud services
            such as Heroku, Netlify, AWS S3, AWS CloudFront, Cloudflare, and
            Cloudinary.
          </>,
          <>
            Optimized application performance and bundles using Chrome Dev
            Tools, Google Lighthouse, and Webpack Bundle Analyzer.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Federal University of Piauí",
        description: <>BSc in Computer Science</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Some Projects I've Worked On",
  description: `Web development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
