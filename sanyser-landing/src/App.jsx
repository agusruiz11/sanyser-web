import { lazy, Suspense } from 'react';
import { useLenis } from './hooks/useLenis';
import SchemaMarkup from './components/seo/SchemaMarkup';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Hero from './components/sections/Hero';
import Servicios from './components/sections/Servicios';

const Marcas     = lazy(() => import('./components/sections/Marcas'));
const Nosotros   = lazy(() => import('./components/sections/Nosotros'));
const Obras      = lazy(() => import('./components/sections/Obras'));
const Presupuesto = lazy(() => import('./components/sections/Presupuesto'));
const FAQ        = lazy(() => import('./components/sections/FAQ'));

export default function App() {
  useLenis();

  return (
    <div className="font-sans">
      <SchemaMarkup />
      <Navbar />

      <main>
        <Hero />
        <Servicios />
        <Suspense fallback={null}>
          <Marcas />
          <Nosotros />
          {/* <Productos /> */}
          <Obras />
          {/* <Testimonios /> */}
          <Presupuesto />
          <FAQ />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
