import Navbar from '@/components/Navbar/Nav'
import Hero from '@/components/HeroSection/Hero'
import HeroArticle from '@/components/HeroSection/HeroArticle'
import NewsLetter from '@/components/HeroSection/NewsLetter'


const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroArticle />
      <NewsLetter />
    </>
  )
}

export default Landing