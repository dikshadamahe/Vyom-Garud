// app/page.jsx
import ScrollProgress from '../src/components/ScrollProgress';
import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import Highlights from '../src/components/Highlights';
import About from '../src/components/About';
import Capabilities from '../src/components/Capabilities';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      <NavBar />
      <main>
        {/* PDF Req: Hero */}
        <Hero />
        
        {/* PDF Req: Highlights */}
        <Highlights />
        
        {/* PDF Req: About */}
        <About />
        
        {/* PDF Req: Capabilities */}
        <Capabilities />
        
        {/* PDF Req: Contact */}
        <Contact />
      </main>
      
      {/* PDF Req: Footer */}
      <Footer />
    </>
  );
}
