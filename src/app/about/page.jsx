'use client'

import Image from "next/image"
import webgif from '../../imgs/websitegif.gif'
import bespokegif from '../../imgs/bespokegif.gif'
import businessgif from '../../imgs/businessgif.gif'
import stockprofile from '../../imgs/stockprofile.jpg'

import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section className="aboutsec">
          <div className="aboutimage">
            <Image
              src={webgif}
              alt="Web Development and Design"
            />
          </div>
          <div className="aboutinfo">
            <h1>Website Development & Design</h1>
            <p>
            At VoltTechSolutions, we excel in crafting captivating and 
            modern websites that make a lasting impression.
            We stay up-to-date with the latest industry trends and technologies to ensure your 
            website not only looks amazing but also delivers a seamless user experience. 
            Whether you need a simple business landing page or a complex e-commerce platform, 
            we have the skills to bring your vision to life.
            </p>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section className="aboutsec">
          <div className="aboutimage">
            <Image
              src={bespokegif}
              alt="Bespoke software"
            />
          </div>
          <div className="aboutinfo">
            <h1>Bespoke Software</h1>
            <p>
              Every business has unique requirements, and off-the-shelf 
              software may not always meet your specific needs. We&apos;ll work closely with you 
              to understand your business processes and create tailor-made software solutions. 
              We harness the power of cutting-edge technologies to develop robust and scalable 
              applications that streamline your operations, boost efficiency, and give you a 
              competitive edge letting you optimize your workflows, automate tasks, and achieve 
              your business goals with precision.</p>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section className="aboutsec">
          <div className="aboutimage">
            <Image
              src={businessgif}
              alt="Bespoke software"
            />
          </div>
          <div className="aboutinfo">
            <h1>Business Intelligence Reports</h1>
            <p>
            Our business intelligence reporting solutions provide deep insights into your 
            organization&apos;s performance, enabling you to make informed decisions. We gather and 
            analyze data from various sources, transforming it into meaningful reports and 
            visualizations. Our customized dashboards and interactive charts present complex 
            information in a clear and concise manner, helping you identify trends, uncover opportunities, 
            and drive growth. With our business intelligence reports, you can unlock the hidden value 
            within your data and gain a competitive advantage.
            </p>
          </div>
        </section>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bounce">
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section className="aboutme">
          <div className="meimage">
            <Image
              src={stockprofile}
              alt="Bespoke software"
            />
          </div>
          <div className="meinfo">
            <h1>About me</h1>
            <div className="aboutmep">
              <p>
                Hi, I&apos;m <span className="amspan">James</span>, the owner and sole 
                developer of Volt Tech Solutions.
              </p>
              <p>
                Having previously successfully built an exterior cleaning company from the 
                ground up, I discovered firsthand the need for reliable and 
                fairly priced software that could address my industry-specific needs.
              </p>
              <p>
                Fueled by my interest in technology, background in programming and a desire 
                to help other business owners, I developed an app called ServiceTrackr 
                that would revolutionize the ease with which service businesses manage their customers and track their finances. 
              </p>
              <p>
                Through this endeavor, I realized there was a significant gap in the market for affordable yet 
                top-quality bespoke software and business analytics and with the recent advancements in no-code, 
                low-code, and AI tools, I recognized the immense potential to offer fast and affordable solutions 
                to individuals and businesses alike. I&apos;m passionate about leveraging technology to empower 
                businesses, and I take pride in providing tailored software solutions that streamline operations, 
                boost productivity, and drive growth. With my expertise and a deep understanding of the challenges 
                faced by businesses, I&apos;m committed to delivering innovative solutions that make a 
                real impact. 
              </p>
              <p>
                Reach out to me to discuss the power of technology to 
                transform your business. Let&apos;s collaborate and unlock your full potential.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default AboutPage