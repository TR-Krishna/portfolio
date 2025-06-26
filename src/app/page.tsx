// app/page.tsx or app/page.jsx
import React from 'react';
import Hero from './Hero/page';
import Experience from './Experience/page';
import Contacts from './Contacts/page';
import Divider from './Divider/page';

import Projects from '../app/components/sections/Projects';
import Navbar from '../app/components/sections/Navbar';
// import Skills from '../app/components/sections/Skills'; // Optional
// import Education from '../app/components/sections/Education'; // Optional

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      
      <Experience />
      <Projects />
      <Divider />
      <Contacts />
    </>
  );
}
