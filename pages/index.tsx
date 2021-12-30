import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Organisms, { BannerMain } from 'Organisms';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerMain/>
      <div style={{height: '100vh'}}></div>
    </>
  );
};

export default Home;