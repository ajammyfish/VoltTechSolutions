'use client'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Card from "./components/Card";

import Teamwork from '../imgs/tw.png'
import Automate from '../imgs/auto.png'
import Engage from '../imgs/eng.png'

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
              <h1>Web Development and Bespoke Software Solutions</h1>
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
              <h1 className="missionheading">Our Team Will:</h1>
              <ul className='missionpoints'>
                <li>Craft fast, interactive, modern websites</li>
                <li>Automate Complex Business Processes</li>
                <li>Create powerful Business Intelligence reporting solutions</li>
                <li>Create bespoke software tailored to your needs</li>
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
        Welcome to <span style={{color: 'blueviolet', fontWeight: 'bold'}}>VoltTechSolutions</span>. We specialize in delivering exceptional digital 
        solutions tailored to your specific needs. With our expertise, we craft <span style={{color: 'blueviolet'}}>fast, 
        interactive, modern websites</span> that not only capture attention but also 
        provide seamless user experiences. We also make use of various technologies to 
        automate <span style={{color: 'blueviolet'}}>complex business processes</span>, streamlining your operations and 
        increasing efficiency. Equipped with the skills to create powerful 
        <span style={{color: 'blueviolet'}}> business intelligence</span> reporting solutions, we provide you with valuable insights 
        to make informed decisions. We take pride in our ability to develop<span style={{color: 'blueviolet'}}> bespoke 
        software</span> that perfectly aligns with your unique requirements, empowering your 
        business to reach new heights. Partner with us to transform your digital 
        landscape together.
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
            <li><strong>Elegant Website Design:</strong> Captivate your audience with beautifully crafted, modern websites that leave a lasting impression. By constantly keeping up to date with new technologies and best industry practices, we can guarantee your website will flow, be found, and be fast.</li>
            <li><strong>Streamlined Process Automation:</strong> Say goodbye to manual and repetitive tasks. Our automation solutions simplify complex business processes, increasing efficiency, accuracy, and productivity. Let technology handle the workload while you focus on what matters most.</li>
            <li><strong>Insightful Business Intelligence:</strong> Make data-driven decisions with confidence. Our powerful reporting solutions provide valuable insights into your business performance, enabling you to identify trends, uncover opportunities, and drive growth.</li>
            <li><strong>Bespoke Software Development:</strong> We understand that every business has unique requirements. Our experienced developers will work closely with you to create tailor-made software solutions that align perfectly with your specific needs, helping you streamline operations and achieve your goals.</li>
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
