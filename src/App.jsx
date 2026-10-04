import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Preloader from './components/Preloader'
import { useRouter } from './router'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import AchievementsPage from './pages/AchievementsPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const routes = {
  '/': Home,
  '/about': AboutPage,
  '/achievements': AchievementsPage,
  '/projects': ProjectsPage,
  '/skills': SkillsPage,
  '/experience': ExperiencePage,
  '/contact': ContactPage,
}

export default function App() {
  const { path } = useRouter()
  const Page = routes[path] || NotFoundPage

  return (
    <div className="flex min-h-screen flex-col bg-base overflow-x-hidden">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      {/* No AnimatePresence here — avoids any nested-exit deadlock with
          the lightbox/tab AnimatePresence instances inside pages */}
      <motion.main
        key={path}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="flex-1"
      >
        <Page />
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  )
}