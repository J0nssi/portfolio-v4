'use client'
import React, { useRef, useEffect, useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { Link } from 'next-view-transitions'
import { useRouter } from 'next/navigation';

const ProjectClient = ({ project, projects }) => {
  const router = useRouter();
  const containerRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length]; // Get the next project, wrap around if at the end

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cloneImages = () => {
      const images = container.querySelectorAll('img');
      const cloneCount = Math.ceil(container.clientHeight / images[0].clientHeight) + 1;
      for (let i = 0; i < cloneCount; i++) {
        images.forEach((image) => container.appendChild(image.cloneNode(true)));
      }
    };

    const startVerticalScrolling = () => {
      container.scrollTop = 0;
      const scrollHeight = container.scrollHeight / 2;
      const scrollSpeed = 50; // Adjust scroll speed as needed
      let scrollAmount = 1;

      const scroll = () => {
        container.scrollTop += scrollAmount;
        if (container.scrollTop >= scrollHeight) {
          container.scrollTop = 0;
        }
      };

      const start = () => {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(scroll, scrollSpeed);
      };

      start();
    };

    const startHorizontalScrolling = () => {
      container.scrollLeft = 0;
      const scrollWidth = container.scrollWidth / 2;
      const scrollSpeed = 50; // Adjust scroll speed as needed
      let scrollAmount = 1;

      const scroll = () => {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft >= scrollWidth) {
          container.scrollLeft = 0;
        }
      };

      const start = () => {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(scroll, scrollSpeed);
      };

      start();
    };

    let scrollInterval;

    // Function to handle resizing and re-initializing scrolling behavior
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setIsSmallScreen(true);
        cloneImages();
        startHorizontalScrolling();
      } else {
        setIsSmallScreen(false);
        cloneImages();
        startVerticalScrolling();
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div
        ref={containerRef}
        className={styles.left}
      >      
        {project.src.map((imageSrc, index) => (
            <Image
              key={index}
              src={imageSrc}
              alt={`${project.name} image ${index + 1}`}
              width={1920}
              height={1080}
              className={styles.imgContainer}
              layout="responsive"
            />
        ))}
      </div>
      <div className={styles.right}>
        <h1 className={styles.projectName}>{project.name}</h1>
        <div className={styles.rightContent}>
          <div className={styles.column}>
            <h3>Description:</h3>
            <p>{project.description}</p>
          </div>
          <div className={styles.column}>
            <h3>Category:</h3>
            <p>{project.category}</p>
            <h3>Client:</h3>
            <p>{project.client}</p>
            <h3>Role:</h3>
            <p>{project.role}</p>
            <h3>Year:</h3>
            <p>{project.year}</p>
          </div>
        </div>
        <Link href="/">
        <div className={styles.closeButton}>
          <span className={styles.arrow}></span>
          <p className={styles.projectLink}>Close</p>
        </div>
        </Link>
        <Link href={`${nextProject.id}`} passHref>
          <div className={styles.nextButton}>
            <span className={styles.arrow}></span>
            <p className={styles.projectLink}>Next</p>
          </div>
        </Link>
        <div className={styles.visitButton}>
          <span className={styles.arrow}></span>
          <a className={styles.projectLink} href={project.href} target="_blank">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectClient;
