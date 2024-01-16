import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image';
import Link from "next/link";
function Hero() {
  return (
    <main className={styles.main} id="about">
      <div className={styles.info}>
        <h2 className={styles.h2}>Hi I'm Vignesh</h2>
        <p className={styles.desc}>
          I am a passionate frontend developer and a final year undergraduate
          student with a keen interest in web development. I aspire to
          collaborate with passionate teams, dive into challenging projects.
        </p>
        <div className={styles.icons}>
          <Link href="https://www.linkedin.com/in/vignesh-sadhu-b85b9b217/">
            <Image
              className="hover:scale-90"
              src="/linkedin.png"
              width={26}
              height={26}
              alt="linkedin logo"
            />
          </Link>
          <Link href="https://github.com/Vignesh2131">
            <Image
              className="hover:scale-90"
              src="/github.png"
              width={26}
              height={26}
              alt="github logo"
            />
          </Link>
          <Link href="https://twitter.com/imVignesh21">
            <Image
              className="hover:scale-90"
              src="/twitter.png"
              width={26}
              height={26}
              alt="twitter logo"
            />
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/portfolio.jpg"
          width={300}
          height={300}
          alt="Profile"
          className={styles.profile}
        />
      </div>
    </main>
  );
}

export default Hero