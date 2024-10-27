/*import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Services from "./services/page";


export default function Home() {
  return (
    <div>
      <About/>
      <Contact/>
      <Services/>
     
    </div>
  );
}*/
import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="contact">Contact</Link></li>
        <li><Link href="services">Services</Link></li>



      </ul>
      
    </div>
  )
}

export default Homepage

