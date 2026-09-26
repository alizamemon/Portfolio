import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      <AnimatePresence mode="wait">
        <motion.main
          key={path}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="flex-1"
        >
          <Page />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  )
}
