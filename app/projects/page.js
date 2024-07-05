import React from 'react';
import { projects } from '../components/data';
import styles from './style.module.css';
import { TransitionLink } from '../components/TransitionLink';

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
          <TransitionLink 
            animationClass="swipe-right-to-left" 
            key={index} 
            href={`/projects/${project.id}`} 
            overlayText={project.name} // Pass the project name here
          >
            <div className={styles.projectItem}>
              <p className={styles.projectName}>{project.name}</p>
              <p className={styles.projectCategory}>{project.category}</p>
              <p className={styles.projectClient}>{project.client}</p>
              <p className={styles.projectYear}>{project.year}</p>
            </div>
          </TransitionLink>
        ))}   
      </div>
    </div>
  );
}
