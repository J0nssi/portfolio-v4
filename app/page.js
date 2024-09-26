import styles from "./page.module.css";
import { projects } from './components/data';
import { MdOutlineArrowOutward } from "react-icons/md";
import { TransitionLink } from "./components/TransitionLink";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <p className={styles.header}>Info</p>
        <p>Hello, I&apos;m Joonas, a Finnish software engineer living in Helsinki. I&apos;m solving the technical demands with TypeScript, C# and Python.</p>
        <div className={styles.social}>
        <a href="mailto:joonas.vaija@hotmail.com">
            <div className={styles.project}>
              <span className={styles.arrow}></span>
              <p className={styles.projectName}>Mail</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/joonas-vaija/" target="_blank">
            <div className={styles.project}>
              <span className={styles.arrow}></span>
              <p className={styles.projectName}>Linkedin</p>
            </div>
          </a>
          <a href="https://github.com/J0nssi" target="_blank">
            <div className={styles.project}>
              <span className={styles.arrow}></span>
              <p className={styles.projectName}>Github</p>
            </div>
          </a>
          <a href="JoonasVaija_CV.pdf" target="_blank">
            <div className={styles.project}>
              <span className={styles.arrow}></span>
              <p className={styles.projectName}>Resume</p>
            </div>
          </a>
        </div>
        <div className={styles.button}>
          <MdOutlineArrowOutward className={styles.buttonArrow} />
          <p className={styles.buttonText}><TransitionLink href="/about">Read more</TransitionLink></p>
        </div>
      </div>
      <div className={styles.work}>
        <p className={styles.header}>Work</p>
        <p>Incoach - UI/UX Designer and Web Developer, <span className={styles.time}>7 months</span></p>
        <p>Istekki - Member of IT-support team in Kuopio University Hospital, <span className={styles.time}>6 months</span></p>
        <p>Vilkku-fillarit - Web developer, <span className={styles.time}>3 months</span></p>
      </div>
      <div className={styles.projects}>
        <p className={styles.header}>Selected projects</p>
        <div className={styles.projectWrapper}>
          {projects.slice(0, 3).map((project, index) => (
            <TransitionLink overlayText={project.name} animationClass="swipe-right-to-left" key={index} href={`/projects/${project.id}`} >
              <div className={styles.project}>
                <span className={styles.arrow}></span>
                <p className={styles.projectName}>{project.name}</p>
              </div>
            </TransitionLink>
          ))}   
        </div>
        <div className={styles.button}>
            <MdOutlineArrowOutward className={styles.buttonArrow} />
            <p className={styles.buttonText}><TransitionLink href="/projects">Show all</TransitionLink></p>
          </div>
      </div>
    </main>
  );
}
