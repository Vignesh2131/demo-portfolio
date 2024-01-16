"use client"
import React from 'react'
import styles from "../styles/Project.module.css"
import Link from 'next/link'

import { useAnimation, motion } from "framer-motion";

import Image from 'next/image';

function Projects() {

  return (
    <div className={styles.main} id="projects">
      <div>
        <h2 className={styles.heading}>Projects</h2>
      </div>
      <div className={styles.cardWrapper}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={styles.card}
        >
          <div>
            <Image
              src="/projects/imageechoes.png"
              width={700}
              height={400}
              alt="project1"
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Imageechoes</h3>
            <p className={styles.description}>
              A Photogallery website which displays all the images uploaded from
              various users. Backend is managed by Sanity CMS and authentication
              is handled using Firebase.
            </p>
            <ul className={styles.tech}>
              <li>React.js</li>
              <li>Google Firebase</li>
              <li>TailwindCSS</li>
            </ul>
            <ul className={styles.links}>
              <li>
                <Link href="https://imageechoes.netlify.app/">
                  <Image
                    src="/live.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Vignesh2131/Image-Echoes">
                  <Image
                    src="/coding.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={styles.card}
        >
          <div>
            <Image
              src="/projects/Sneaker-studio.png"
              width={700}
              height={400}
              alt="project1"
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Sneaker Studio</h3>
            <p className={styles.description}>
              An E-commerce website consists of various sneakers and those can
              be changed by the CMS i.e. Sanity which holds the data of the
              website.
            </p>
            <ul className={styles.tech}>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ul>
            <ul className={styles.links}>
              <li>
                <Link href="https://sneakers-studio.vercel.app/">
                  <Image
                    src="/live.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Vignesh2131/Sneakers-studio">
                  <Image
                    src="/coding.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={styles.card}
        >
          <div>
            <Image
              src="/projects/cookyourfood.png"
              width={700}
              height={400}
              alt="project2"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Cook your food</h3>
            <p className={styles.description}>
              A Website that displays the dishes of different cuisines
              worldwide. We can even search for our own dishes and it fetches
              data from the API.
            </p>
            <ul className={styles.tech}>
              <li>ReactJS</li>
              <li>CSS</li>
            </ul>
            <ul className={styles.links}>
              <li>
                <Link href="https://cookyourfood.netlify.app/">
                  <Image
                    src="/live.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Vignesh2131/Cook-your-food">
                  <Image
                    src="/coding.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={styles.card}
        >
          <div>
            <Image
              src="/projects/manage.png"
              width={700}
              height={400}
              alt="project3"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Manage</h3>
            <p className={styles.description}>
              A landing page about a brand called Manner which is a shipping and
              delivery management system.
            </p>
            <ul className={styles.tech}>
              <li>HTML</li>
              <li>TailwindCSS</li>
            </ul>
            <ul className={styles.links}>
              <li>
                <Link href="https://managethethings.netlify.app/">
                  <Image
                    src="/live.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Vignesh2131/manage-landing-page">
                  <Image
                    src="/coding.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={styles.card}
        >
          <div>
            <Image
              src="/projects/tindog.png"
              width={700}
              height={400}
              alt="project4"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Tindog</h3>
            <p className={styles.description}>
              A Tinder but it is for dogs where the owners have the access to
              help their dogs for their friends.
            </p>
            <ul className={styles.tech}>
              <li>HTML</li>
              <li>Bootstrap 5</li>
            </ul>
            <ul className={styles.links}>
              <li>
                <Link href="https://vignesh2131.github.io/TIndog/">
                  <Image
                    src="/live.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Vignesh2131/TIndog/">
                  <Image
                    src="/coding.png"
                    width={24}
                    height={24}
                    alt="na"
                    className={styles.link}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects