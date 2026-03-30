import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Hero from './components/sections/Hero';
import Nosotros from './components/sections/Nosotros';
import Productos from './components/sections/Productos';
import Marcas from './components/sections/Marcas';
import Servicios from './components/sections/Servicios';
import Obras from './components/sections/Obras';
import Testimonios from './components/sections/Testimonios';
import Presupuesto from './components/sections/Presupuesto';
import FAQ from './components/sections/FAQ';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <main>
        <Hero />
        <Nosotros />
        <Productos />
        <Marcas />
        <Servicios />
        <Obras />
        <Testimonios />
        <Presupuesto />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
