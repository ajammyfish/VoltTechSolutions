'use client'
import Image from "next/image"
import Price from "@/app/components/Price"
import { FaBolt } from 'react-icons/fa'
import {BsTsunami} from 'react-icons/bs'

import { motion } from "framer-motion"

const BespokeSoftware = () => {
  return (
    <div className="page">
        <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
        >
        <div className="bstop">
            <h1>Bespoke Software</h1>
            <p>
                Bring your vision to reality.
            </p>
        </div>
        </motion.div>


        <div className="wd-icon">
            <BsTsunami className="abouticon" />
        </div>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="wd-points">
                <ul>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Full-Stack Web Applications:</span> Customised web application development tailored to your specific business needs.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Glide Apps (No-Code Platform):</span> Rapid, trustworthy, affordable development of custom mobile and web app solutions.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>User friendly interfaces:</span> Designed with the user experience in mind, I&apos;ll build elegant apps that flow from start to finish.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Scalable and Robust Architecture:</span> Built to last and handle increasing user demands.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Continuous support and maintenance:</span> I&apos;ll continue to maintain and update your application to ensure optimal performance.</li>
                </ul>
            </div>
        </motion.div>

        <div className="wd-prices">
            <h1 className="wdp-header">Standard Hourly Rate</h1>
            <div className="price-cards">
                <Price price={'29'} title={'Glide Apps'} description={<ul>
                    <li>Cost-effective development and faster time-to-market compared to traditional coding</li>
                    <li>Seamless integration with various data sources</li>
                    <li>Real-time collaboration and data synchronization across devices and platforms</li>
                    <li>Ongoing updates and optimizations leveraging Glide&apos;s platform advancements</li>
                    </ul>} />
                <Price price={49} title={'Full-Stack Web Apps'} description={<ul>
                    <li>Development tailored to your specific business needs</li>
                    <li>User-friendly interfaces and intuitive designs</li>
                    <li>Scalable and robust architecture</li>
                    <li>Database design and implementation</li>
                    <li>Continous support and maintenance</li>
                    </ul>} />
            </div>

        </div>
    </div>
  )
}

export default BespokeSoftware