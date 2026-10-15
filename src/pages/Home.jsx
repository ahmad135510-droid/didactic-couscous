import Hero from '../sections/Hero.jsx'
import WhoWeAre from '../sections/WhoWeAre.jsx'
import FeaturedProperties from '../sections/FeaturedProperties.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import WhyChooseHorizon from '../sections/WhyChooseHorizon.jsx'
import TeamSection from '../sections/TeamSection.jsx'
import CTA from '../sections/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseHorizon />
      <TeamSection />
      <CTA />
    </>
  )
}
