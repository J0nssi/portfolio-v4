'use client'
import React, { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';

export default function Page() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.left}>

                </div>
                <div className={styles.right}>
                    {/* Right content */}
                </div>
            </div>
            <div className={styles.bottom}>
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
                                <h3>Istekki Oy, IT-support</h3>
                                <p>Jan 2023 - July 2023</p>
                            </div>
                            <hr className={styles.seperator} />

                            <p>Solved IT support tasks</p>
                            <p>Pre-installed PCs with right software</p>
                            <p>Replaced old PCs and peripherals with new ones</p>
                            <p>Installed new workstations</p>

     
                                

                                
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
                            <p>Content for section 2.</p>
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
                            <p>Content for section 3.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
