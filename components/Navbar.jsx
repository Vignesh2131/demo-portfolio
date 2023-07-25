
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
      <nav className={styles.nav}>
       
        <h1 className={styles.brand}>Vignesh Sadhu</h1>
        <ul className={styles.navItems}>
          <Link href="#about">About me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">
            <button className={styles.navButton}>Contact</button>
          </Link>
         
        </ul>
      </nav>
    );
}

export default Navbar