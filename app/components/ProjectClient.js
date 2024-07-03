'use client'
import React, { useRef, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

const ProjectClient = ({ project, projects }) => {
  const containerRef = useRef(null);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length]; // Get the next project, wrap around if at the end

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.projectHeader}>
          <h1 className={styles.projectName}>{project.name}</h1>
          <div className={styles.projectIndex}>
            <div>00{currentIndex + 1}</div>
            <div>/00{projects.length}</div>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.infoColumn}>
            <div className={styles.columnContent}>
              <div className={styles.item}>
                <h3>Category:</h3>
                <p>{project.category}</p>
              </div>
              <div className={styles.item}>
                <h3>Client:</h3>
                <p>{project.client}</p>
              </div>
              <div className={styles.item}>
                <h3>Role:</h3>
                <p>{project.role}</p>
              </div>
              <div className={styles.item}>
                <h3>Year:</h3>
                <p>{project.year}</p>
              </div>
            </div>
          </div>
          <div className={styles.descriptionColumn}>
            <p>{project.description}</p>
            <hr className={styles.divider} />
            <div className={styles.visitButton}>
              <span className={styles.arrow}></span>
              <a className={styles.projectLink} href={project.href} target="_blank">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
      <div ref={containerRef} className={styles.bottom}>
        {project.src.map((imageSrc, index) => (
          <div key={index} className={styles.imageContainer}>
            <div className={styles.lineWrapper}>
              <div className={styles.imageNumber}>00{index + 1}</div>
              <div className={styles.line}></div>
            </div>
            
            <div className={styles.imgContainer}>
              <Image
                src={imageSrc}
                alt={`${project.name} image ${index + 1}`}
                width={1920}
                height={1080}
                layout="responsive"
              />
            </div>
          </div>
        ))}
        <div className={styles.nextSection}>
          <h3>Next project</h3>
          <Link href={`/projects/${nextProject.id}`} passHref>
            <div className={styles.nextButton}>
              <span className={styles.arrow}></span>
              <p className={styles.projectLink}>/{nextProject.name}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectClient;
