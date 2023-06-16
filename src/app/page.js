'use client'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Card from "./components/Card";

import Teamwork from '../imgs/tw.png'
import Automate from '../imgs/auto.png'
import Engage from '../imgs/eng.png'

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="home-top">
          <div className="ht-headers">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h1>SouthWestSolutions - Dorset Web Designer.</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h2>
              <Typewriter
                options={{
                  strings: ['...Bespoke Software', '...Elegant Websites', '...Scalable Web Applications', '...Business Intelligence'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h2>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="home-mission">
          <div className="mission">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <h1 className="missionheading">We Will:</h1>
              <ul className='missionpoints'>
                <li>Craft fast, interactive, SEO optimised, modern websites</li>
                <li>Create bespoke software tailored to your needs</li>
                <li>Automate Complex Business Processes</li>
                <li>Create powerful Business Intelligence reporting solutions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <section className="home-content">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>
        Welcome to <span style={{color: 'blueviolet', fontWeight: 'bold'}}>SouthWestSolutions</span>. Based in Dorset, we specialise in delivering exceptional digital 
        solutions tailored to your specific needs. With our expertise, we design <span style={{color: 'blueviolet'}}>fast, 
        interactive, modern websites</span> that not only capture the attention of users, but also 
        search engines by using the most up to date best practices in SEO optimisation. 
        We also take pride in our ability to develop excellent<span style={{color: 'blueviolet'}}> bespoke 
        software</span> solutions that perfectly align with your unique business requirements aswell as 
        making use of the lateset technologies to automate <span style={{color: 'blueviolet'}}>complex business processes</span>, 
        streamlining your operations and increasing efficiency. Equipped with the skills to create powerful 
        <span style={{color: 'blueviolet'}}> business intelligence</span> reporting solutions, we can provide you with valuable insights 
        to make informed decisions.
        </p>
        </motion.div>

        <div className="tools">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ul>
            <li><strong><Link style={{color: 'rgb(47, 196, 255)'}} href='about/webdesign/'>Elegant Website Design:</Link></strong> Captivate your audience with beautifully crafted, modern SEO optimised websites that leave a lasting impression. By constantly keeping up to date with new technologies and best industry practices, we can guarantee your website will flow, be found, and be fast.</li>
            <li><strong><Link style={{color: 'rgb(47, 196, 255)'}} href='about/bespokesoftware/'>Bespoke Software Development:</Link></strong> We understand that every business has unique requirements. Our experienced developers will work closely with you to create tailor-made software solutions that align perfectly with your specific needs, helping you streamline operations and achieve your goals.</li>
            <li><strong><Link style={{color: 'rgb(47, 196, 255)'}} href='about/bespokesoftware/'>Streamlined Process Automation:</Link></strong> Say goodbye to manual and repetitive tasks. Our automation solutions simplify complex business processes, increasing efficiency, accuracy, and productivity. Let technology handle the workload while you focus on what matters most.</li>
            <li><strong><Link style={{color: 'rgb(47, 196, 255)'}} href='about/businessanalytics/'>Insightful Business Intelligence:</Link></strong> Make data-driven decisions with confidence. Our powerful reporting solutions provide valuable insights into your business performance, enabling you to identify trends, uncover opportunities, and drive growth.</li>
          </ul>
        </motion.div>
        </div>
      </section>

      <div className="cards">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className='card' title="Collaborate" description="We'll work together to create the perfect solution." img={Teamwork} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className='card' title="Automate" description="Provide software solutions to make your life easier." img={Automate} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className='card' title="Engage" description="Drive engagement towards your business." img={Engage} />
        </motion.div>
      </div>
    </div>
  )
}
