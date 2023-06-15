'use client'
import Image from "next/image"
import Price from "@/app/components/Price"
import { FaBolt } from 'react-icons/fa'

import { motion } from "framer-motion"

const BusinessAnalytics = () => {
  return (
    <div className="page">
        <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
        >
        <div className="batop">
            <h1>Business Analytics</h1>
            <p>
              Unleash the power of data on your business.
            </p>
        </div>
        </motion.div>


        <div className="wd-icon">
            <FaBolt className="abouticon" />
        </div>

        <h3 style={{textAlign: 'center', marginBottom: '70vh'}}>Full Guide Coming Soon...</h3>
        
    </div>
  )
}

export default BusinessAnalytics