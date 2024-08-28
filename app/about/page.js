'use client'
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Page() {
    const [activeIndex, setActiveIndex] = useState(null);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null; // Or a loading spinner
    }

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Image
                    className={styles.image}
                    src="/omakuva.jpg" // Fill the parent container
                    width={1920}  // Set appropriate width
                    height={1080}
                    objectFit="cover"  // Maintain aspect ratio
                    objectPosition="center"
                    />
                </div>
                <div className={styles.right}>
                    <h1 className={styles.headerTop}>About me</h1>
                    <p className={styles.dropCap}>I am Bachelor Of Engineer in Information Technology. I specialized in Software Development. I wrote my Thesis about UI/UX Designing in Modern Web Page Development. You can read it about <em><a href='https://urn.fi/URN:NBN:fi:amk-202404106183' target='_blank' className={styles.link}>here</a></em> in Finnish. I am currently located in Helsinki.</p>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.accordion}>
                    <div className={styles.accordionItem}>
                        <button
                            className={styles.accordionButton}
                            onClick={() => toggleAccordion(0)}
                        >
                            <p>Employment</p>
                            <div className={`${styles.plusMinus} ${activeIndex === 0 ? styles.rotate : ''}`}>
                                <div className={`${styles.line} ${styles.vertical}`} />
                                <div className={`${styles.line} ${styles.horizontal}`} />
                            </div>
                        </button>
                        <div
                            className={`${styles.accordionContent} ${activeIndex === 0 ? styles.active : ''}`}
                        >
                            <div className={styles.header}>
                                <h3>Incoach Oy, UI/UX Designer & Web Developer</h3>
                                <p>Aug 2023 - Mar 2024</p>
                            </div>
                            <hr className={styles.seperator} />
                            <p>UI/UX Designing and developing a new website for Incoach with Figma and Wix Studio.</p>
                            <p>Writing thesis.</p>
                            <div className={styles.header}>
                                <h3>Istekki Oy, IT-support (Kuopio University Hospital)</h3>
                                <p>Jan 2023 - Jul 2023</p>
                            </div>
                            <hr className={styles.seperator} />
                            <p>Solved IT support tasks like updating software, installing new PCs/workstations or peripherals.</p>
                            <p>Teamwork with other team members to have a best possible outcome for a client.</p>
                            <div className={styles.header}>
                                <h3>Vilkku-fillarit, Savonia, Green Data Project, Web Developer</h3>
                                <p>Jun 2022 - Sep 2022</p>
                            </div>
                            <hr className={styles.seperator} />
                            <p>Website design and frontend development with React.</p>
                            <p>Python scripts to calculate data from open API and making docker container for them and schedule them with cron.</p>
                        </div>
                    </div>
                    <div className={styles.accordionItem}>
                        <button
                            className={styles.accordionButton}
                            onClick={() => toggleAccordion(1)}
                        >
                            <p>Education</p>
                            <div className={`${styles.plusMinus} ${activeIndex === 1 ? styles.rotate : ''}`}>
                                <div className={`${styles.line} ${styles.vertical}`} />
                                <div className={`${styles.line} ${styles.horizontal}`} />
                            </div>
                        </button>
                        <div
                            className={`${styles.accordionContent} ${activeIndex === 1 ? styles.active : ''}`}
                        >
                            <div className={styles.header}>
                                <h3>Savonia University of Applied Science</h3>
                                <p>Sep 2019 - Apr 2024</p>
                            </div>
                            <hr className={styles.seperator} />
                            <p>Software Development, Captain of SavoniaCS</p>
                            <div className={styles.header}>
                                <h3>Valkeala High School</h3>
                                <p>Sep 2013 - Apr 2015</p>
                            </div>
                            <hr className={styles.seperator} />
                            <p>Maths, Physics, English, Finnish (Native Language), Health Education</p>
                            <p></p>
                        </div>
                    </div>
                    <div className={styles.accordionItem}>
                        <button
                            className={styles.accordionButton}
                            onClick={() => toggleAccordion(2)}
                        >
                            <p>Skills</p>
                            <div className={`${styles.plusMinus} ${activeIndex === 2 ? styles.rotate : ''}`}>
                                <div className={`${styles.line} ${styles.vertical}`} />
                                <div className={`${styles.line} ${styles.horizontal}`} />
                            </div>
                        </button>
                        <div
                            className={`${styles.accordionContent} ${activeIndex === 2 ? styles.active : ''}`}
                        >
                            <div className={styles.header}>
                                <h3>Languages</h3>
                                <p>(All of them)</p>
                            </div>
                            <hr className={styles.seperator} />
                            <p>JavaScript, TypeScript, HTML, CSS, Python, C#, SQL</p>
                            <p>Finnish, English, Swedish</p>
                            <div className={styles.header}>
                                <h3>Framworks/Libraries/Others</h3>
                            </div>
                            <hr className={styles.seperator} />
                            <p>React.js, Next.js, Tailwind, Framer Motion, GSAP, Git, NPM</p>
                            <div className={styles.header}>
                                <h3>UI/UX Design</h3>
                            </div>
                            <hr className={styles.seperator} />
                            <p>Figma, Adobe Photoshop</p>
                            <div className={styles.header}>
                                <h3>Other skills</h3>
                            </div>
                            <hr className={styles.seperator} />
                            <p>Video editing: Sony Vegas Pro and Davinci Resolve</p>
                            <p>PC assembly and needed installations</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <h1>When I am not providing efficient code, I am a <em>sportsman.</em></h1>
                    <p className={styles.dropCap}>I am passionate about sports and E-sports. I play ice hockey and disc golf, go to the gym or a run. I also play and watch popular E-sports titles like Counter Strike 2 and League of Legends. I am a competitive person and always want to improve my skills to become better.</p>
                </div>
                <div className={styles.right}>
                    <Image
                        className={styles.image}
                        src="/player.png"
                        height={600}
                        width={600}
                        style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
                    />
                </div>
            </div>
        </div>
    );
}
