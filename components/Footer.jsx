import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';
function Footer() {
  return (
    <footer className={styles.main}>
      <h1 className={styles.brand}>Vignesh Sadhu</h1>
      <ul className={styles.navItems}>
        <li>
          <Link href="https://www.linkedin.com/in/vignesh-sadhu-b85b9b217/">
            <Image
              src="/linkedin.png"
              width={26}
              height={26}
              alt="linkedin logo"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Vignesh2131">
            <Image src="/github.png" width={26} height={26} alt="github logo" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/imVignesh21">
            <Image
              src="/twitter.png"
              width={26}
              height={26}
              alt="twitter logo"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer