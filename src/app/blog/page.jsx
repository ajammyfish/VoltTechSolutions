'use client'

import BlogCard from "../components/BlogCard"

import Link from "next/link"

import Image from "next/image"
import {BsTsunami} from 'react-icons/bs'
import webBuilders from '../../imgs/web-build.jpg'
import aiImg from '../../imgs/gptimg.jpg'

import { motion } from "framer-motion"

const Blog = () => {
  return (
    <div className="page">
        <div className="blog-header">
            <h1>blog.</h1>
        </div>

        <div className="blog-cards">
            <Link className="blog-card-container" href='/blog/custom-web-design-vs-website-builders'><BlogCard title={'Custom Website Development vs. Website Builders'} date={'15/06/2023'} img={webBuilders} /></Link>
            <Link className="blog-card-container" href='/blog/the-rise-of-AI-and-what-it-means-for-the-future-of-web-design'><BlogCard title={'The rise of AI and what it means for the future of Web Design'} date={'15/06/2023'} img={aiImg} /></Link>
        </div>
    </div>
  )
}

export default Blog