
import styles from "./page.module.css";
import { projects } from './components/data';
import { Link } from 'next-view-transitions'
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
      <div className={styles.wrapper}>
    <ThemeSwitch className={styles.name}/>
    <span className={styles.arrowNav}></span>
  </div>
        <p className={styles.title}>Software Engineer</p>
        
      </div>
      <div className={styles.info}>
        <p className={styles.header}>Info</p>
        <p>Hello, I'm Joonas, a Finnish software engineer and front-end developer living in Helsinki. I am passionate about technology, gaming and crafting solid and smooth experiences.</p>
      </div>
      <div className={styles.projects}>
        <p className={styles.header}>Selected projects</p>
            <div className={styles.projectWrapper}>
                {projects.map((project, index) => (
                    <Link key={index} href={`${project.id}`} >
                            <div className={styles.project}>
                                <span className={styles.arrow}></span>
                                <p className={styles.projectName}>{project.name}</p>
                                <img className={styles.image} src={`${project.src[0]}`}></img>
                            </div>                       
                    </Link>
                ))}
            </div>
      </div>
      <div className={styles.customDiv}>
        {/* This div will span the third column */}
        <div className={styles.revealTrigger}></div>
        <img src="J0nssi_solo.png" alt="me" />
        
      </div>
      <div className={styles.more}>
        <p className={styles.header}>More</p>
        <div className={styles.projectWrapper}>
          <a href="mailto:joonas.vaija@hotmail.com" >
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
      </div>
    </main>
  );
}
