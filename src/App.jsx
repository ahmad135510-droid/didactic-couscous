import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PrayerTimes from './components/PrayerTimes'
import Activities from './components/Activities'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [prayerTimes, setPrayerTimes] = useState(null)

  useEffect(() => {
    // Static prayer times — replace with API later
    setPrayerTimes({
      fajr: '۰۵:۱۲',
      dhuhr: '۱۲:۰۵',
      asr: '۱۵:۳۰',
      maghrib: '۱۷:۴۸',
      isha: '۱۹:۱۰',
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PrayerTimes times={prayerTimes} />
      <Activities />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}
