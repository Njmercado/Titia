import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import { faAws, faDigitalOcean, faDocker, faEnvira, faGithub, faGitlab, faGoogle, faNodeJs, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PROJECTS = [
  {
    title: 'Kribi',
    description: () => (
      <span>
        It is a <strong>Dictionary</strong> which is the result of various research projects for <strong>Palenques</strong> language.
        Kribí seeks to maintain and democratize the Palenque language to anyone who wishes
        to obtain knowledge from a wide range of articles, games, phrases, words and letters.
      </span>
    ),
    techs: [
      <FontAwesomeIcon icon={faReact} size="4x" key={1} />,
      <FontAwesomeIcon icon={faPython} size="4x" key={3} />,
      <FontAwesomeIcon icon={faGithub} size="4x" key={6} />,
      <span key={2} className="text-4xl font-black">MUI</span>,
      <span key={4} className="text-4xl font-black">Supabase</span>,
      <span key={5} className="text-4xl font-black">Firebase</span>,
    ],
    images: [
      {
        src: '/static/kribi/1.png',
        alt: ''
      },
      {
        src: '/static/kribi/2.png',
        alt: ''
      },
      {
        src: '/static/kribi/3.png',
        alt: ''
      },
      {
        src: '/static/kribi/4.png',
        alt: ''
      }
    ],
    link: "http://www.kribi.com.co",
    short: {
      title: 'Kribi',
      description: 'Dictionary of Colombian Palenque indigenous language',
      techs: [
        <em key={1}><strong>React</strong></em>,
        <em key={2}><strong>MUI</strong></em>,
        <em key={3}><strong>Supabase</strong></em>,
        <em key={4}><strong>Python</strong></em>,
        <em key={5}><strong>Firebase</strong></em>,
        <em key={6}><strong>Github Actions</strong></em>,
      ],
    },
    history: [
      <article key={1}>
        <section>
          <p className="mb-4">
            This project was initially developed with <strong>VueJS</strong> and <strong>Vuetify</strong> as the Frontend Framework and CSS library, along with <strong>Express</strong> and <strong>MongoDB</strong> for the Backend, deployed on <strong>Digital Ocean</strong>.
          </p>
          <p className="mb-4">
            It has since undergone a complete architectural overhaul. It is currently developed using <strong>React</strong> for modularizing components, with <strong>MUI</strong> as the primary component library.
          </p>
          <p className="mb-4">
            On the backend and infrastructure side, <strong>Supabase</strong> was integrated for robust authentication and as the primary database engine. The core backend services are now developed in <strong>Python</strong>.
          </p>
          <p className="mb-4">
            To streamline operations, the platform utilizes <strong>Firebase</strong> for rapid deployments, alongside <strong>Github</strong> and <strong>Github Actions</strong> for strict version control and automated CI/CD pipelines.
          </p>
          <p>
            Additionally, a comprehensive <strong>Administrator System</strong> was built to handle all internal modifications. This includes full CRUD capabilities for articles (creation, edition, deletion, fetching), as well as words, users, news, and any other data entities within the Kribí ecosystem.
          </p>
        </section>
      </article>,
    ],
    technicalDescription: () => (
      <span>
        The current architecture of Kribí relies on <strong>React</strong> for dynamic component rendering and <strong>MUI</strong> for consistent, accessible UI design.
        <br /><br />
        The data layer is powered by <strong>Supabase</strong>, which seamlessly handles authentication and complex database queries. Business logic and backend processes are driven by <strong>Python</strong>.
        <br /><br />
        The development lifecycle is fully automated. Code is versioned on <strong>Github</strong>, tested and built via <strong>Github Actions (CI/CD)</strong>, and finally deployed securely through <strong>Firebase</strong>.
        A custom-built administrator dashboard also allows full CRUD operations on all content entities, ensuring easy maintenance without developer intervention.
      </span>
    ),
  } as IProjectTemplate,
]

export const EMPTY_PROJECT_TEMPLATE = {
  title: '',
  description: () => <span>Empty description</span>,
  techs: [],
  images: [],
  link: '',
  technicalDescription: () => <span>Empty technical description</span>,
  history: [],
  short: {
    title: '',
    description: '',
    techs: []
  }
}
