import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '300'],
  subsets: ['latin'],
})


export const metadata = {
  title: 'VoltTechSolutions',
  description: 'Making your life easier.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={poppins.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
