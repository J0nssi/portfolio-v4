import React from 'react';
import { projects } from '../components/data';
import styles from './style.module.css';
import {Link} from 'next-view-transitions';

export default function ProjectsPage() {
  return (
    <div className={styles.main}>
        <div className={styles.headers}>
            <p className={styles.projectName}>Project</p>
            <p className={styles.projectCategory}>Category</p>
            <p className={styles.projectClient}>Client</p>
            <p className={styles.projectYear}>Year</p>
        </div>
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <Link key={index} href={`/projects/${project.id}`} passHref>
          <div className={styles.projectItem}>
            <p className={styles.projectName}>{project.name}</p>
            <p className={styles.projectCategory}>{project.category}</p>
            <p className={styles.projectClient}>{project.client}</p>
            <p className={styles.projectYear}>{project.year}</p>
          </div>
        </Link>
      ))}   
    </div>
    </div>
  );
}
