'use client'

import Image from "next/image"
import webgif from '../../imgs/websitegif.gif'
import bespokegif from '../../imgs/bespokegif.gif'
import businessgif from '../../imgs/businessgif.gif'

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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis 
              error est soluta tenetur sunt quisquam rerum molestiae aspernatur ducimus 
              totam maiores eveniet, quasi nostrum saepe accusamus cum impedit odit! Labore
                accusantium reiciendis explicabo nesciunt voluptatum, magni quo error. 
              Quibusdam nam consequuntur, voluptas cupiditate aperiam nemo a id hic iste?</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis 
              error est soluta tenetur sunt quisquam rerum molestiae aspernatur ducimus 
              totam maiores eveniet, quasi nostrum saepe accusamus cum impedit odit! Labore
                accusantium reiciendis explicabo nesciunt voluptatum, magni quo error. 
              Quibusdam nam consequuntur, voluptas cupiditate aperiam nemo a id hic iste?</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis 
              error est soluta tenetur sunt quisquam rerum molestiae aspernatur ducimus 
              totam maiores eveniet, quasi nostrum saepe accusamus cum impedit odit! Labore
                accusantium reiciendis explicabo nesciunt voluptatum, magni quo error. 
              Quibusdam nam consequuntur, voluptas cupiditate aperiam nemo a id hic iste?</p>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default AboutPage