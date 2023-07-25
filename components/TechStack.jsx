"use client"
import React from 'react'
import Image from 'next/image'
import styles from "../styles/TechStack.module.css"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function TechStack() {
   const control = useAnimation();
   const [ref, inView] = useInView();
   useEffect(() => {
     if (inView) {
       control.start("visible");
     } else {
       control.start("hidden");
     }
   }, [control, inView]);
   const boxVariant = {
     visible: { opacity: 1, scale: 1 },
     hidden: { opacity: 0, scale: 0 },
   };
  return (
    <div className={styles.main}>
      <div>
        <h2 className={styles.heading}>Tech Stack</h2>
      </div>
      <motion.div
        className={styles.skills}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image
          src="/html.png"
          width={50}
          height={50}
          alt="html"
          className={styles.skill}
        />
        <Image
          src="/skills/css-3.png"
          width={50}
          height={50}
          alt="css"
          className={styles.skill}
        />
        <Image
          src="/skills/js.png"
          width={50}
          height={50}
          alt="js"
          className={styles.skill}
        />
        <Image
          src="/skills/physics.png"
          width={50}
          height={50}
          alt="react"
          className={styles.skill}
        />
        <Image
          src="/skills/nextjs.svg"
          width={50}
          height={50}
          alt="next"
          className={styles.skill}
        />
        <Image
          src="/skills/tailwind.png"
          width={50}
          height={50}
          alt="tailwind"
          className={styles.skill}
        />
        <Image
          src="/skills/java.png"
          width={50}
          height={50}
          alt="java"
          className={styles.skill}
        />
      </motion.div>
    </div>
  );
}

export default TechStack