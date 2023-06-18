'use client'
import Image from "next/image"
import Price from "@/app/components/Price"
import { FaBolt } from 'react-icons/fa'
import {BsTsunami} from 'react-icons/bs'

import gif from '../../../imgs/sws.gif'

import { motion } from "framer-motion"

const WebDesign = () => {
  return (
    <div className="page">
        <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
        >
        <div className="wdtop">
            <h1>Web Design Services</h1>
            <p>
                Transform your online presence with a modern, professional website.
            </p>
        </div>
        </motion.div>


        <div className="wd-icon">
            <BsTsunami className="abouticon" />
        </div>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="wd-points">
                <ul>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Elegant Website Design:</span> Captivate your audience with beautifully crafted, modern websites that load fast, and leave a lasting impression.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Search Engine Optimisation:</span> By implementing the most up to date SEO practices, I&apos;ll increase your websites ranking on search engines, driving more traffic to your business.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Deep Customisation:</span> If you&apos;ve got ideas, I want to hear them! I create deeply customisable, bespoke designs tailored to your industry and preferences.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>Ongoing Support and Maintenance:</span> I&apos;ll continue to be of service to you after designing and deploying your website. If you wish to update the site in any way simply let me know and I&apos;ll get it done.</li>
                    <li><span style={{color: 'blueviolet', fontWeight: 'bold', textDecoration: 'underline'}}>User Statistics Reports:</span> Each quarter, I&apos;ll generate you a report of the websites traffic and what users are searching for to find your site, alowing you to see the progression of your online presence first hand.</li>
                </ul>
            </div>
        </motion.div>

        <div className="swsdiv">
            <Image src={gif} className="wd-sws"/>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="wd-tools">
                <h1>What do I use?</h1>
                <p>
                    There are a range of technologies available to web designers and developers. I specialise in the following:  
                </p>
                <ul>
                    <li><b>Hard-coding</b> the entire site using a combination programming languages and libraries, allowing for complete customisation and control.</li>
                    <li><b>WebFlow, Shopify and Wordpress.</b> Low/no-code website builders that allow us to streamline the development process.</li>
                    <li><b>Figma</b>, a design tool used to create prototypes.</li>
                </ul>
                <div className="wd-line"></div>
                    
                <p>
                    Choosing the right tools for 
                    the job comes down to a range of factors: 
                </p>
                <ul style={{textAlign: 'center'}}>
                    <li className="wdtli">Project Requirements</li>
                    <li className="wdtli">Design flexibility</li>
                    <li className="wdtli">Time/budget contraints</li>
                    <li className="wdtli">Scalability and Future Growth</li>
                    <li className="wdtli">Client expectations</li>
                </ul>
                <div className="wd-line"></div>
                

                <h3 style={{textAlign: 'center', textDecoration: 'underline', marginBottom: '20px'}}>The development process:</h3>
                <ul style={{width: '80%', margin: 'auto'}}>
                    <li style={{marginBottom: '5px', listStyle: 'outside'}}>A collaborative discussion with the client to understand the project requirements and design preferences.</li>
                    <li style={{marginBottom: '5px', listStyle: 'outside'}}>Determine the clients budget and time expectations.</li>
                    <li style={{marginBottom: '5px', listStyle: 'outside'}}>Use <b>Figma</b> to create a design/prototype to show the client for review.</li>
                    <li style={{marginBottom: '5px', listStyle: 'outside'}}>Complete the project and provide ongoing support.</li>
                </ul>

            </div>
        </motion.div>

        <div className="wd-prices">
            <h1 className="wdp-header">Pricing</h1>
            <div className="price-cards">
                <Price price={249} title={'Starter Tier'} description={<ul>
                    <li>Bespoke website design up to 5 pages</li>
                    <li>Responsive design for cross device compatibility</li>
                    <li>Custom domain integration</li>
                    <li>Basic SEO optimisation</li>
                    <li>Contact form integration</li>
                    <li>Social media integration</li>
                    <li>Basic content population</li>
                    </ul>} />
                <Price price={349} title={'Advanced Tier'} description={<ul>
                    <li>All features included in the Starter Tiers</li>
                    <li>Bespoke website design up to 10 pages</li>
                    <li>Enhanced design customisation</li>
                    <li>Advanced SEO optimisation</li>
                    <li>Content population assistance</li>
                    <li>Basic website analytics setup</li>
                    </ul>} />
                <Price price={599} title={'Pro Tier'} description={<ul>
                    <li>All features included in the Starter and Advanced Tiers</li>
                    <li>Up to 15 pages</li>
                    <li>Payments Integration</li>
                    <li>E-Commerce functionality</li>
                    <li>Advanced SEO strategies</li>
                    <li>Advanced website analytics</li>
                    <li>30 minute call every month for ongoing support and maintenance</li>
                    </ul>} />
            </div>
        </div>
    </div>
  )
}

export default WebDesign