"use client"
import './styles.css'
import { Inter } from 'next/font/google'
import {ThemeProvider} from 'next-themes'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'
export const metadata = {
  title: 'Vignesh Sadhu',
  description: "Welcome to Vignesh's Portfolio Website! Discover a captivating collection of web projects. Join Vignesh on a journey of excellence and creativity. Let's connect and collaborate for exciting opportunities",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Vignesh Sadhu</title>
      </Head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
