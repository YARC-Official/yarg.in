import HomeHero from '@/components/Home/Hero';
import styles from './page.module.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <Footer />
    </>
  );
}
