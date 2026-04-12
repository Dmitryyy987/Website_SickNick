import { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import Magnet from '../reactbits/Magnet';
import Folder from '../reactbits/Folder';
import MetallicPaint, { parseLogoImage } from '../reactbits/MetallicPaint';

const FlowingMenu = lazy(() => import('../reactbits/FlowingMenu'));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoImageData, setLogoImageData] = useState(null);
  const logoRef = useRef(null);
  
  // Navigation items for FlowingMenu
  const menuItems = [
    { link: '/', text: 'Home', image: '/images/nav_home.png' },
    { link: '/services', text: 'Work', image: '/images/nav_work.png' },
    { link: '/case-studies', text: 'Services', image: '/images/nav_services.png' },
    { link: '/process', text: 'About', image: '/images/nav_about.png' },
    { link: '/contact', text: 'Contact', image: '/images/nav_contact.png' },
  ];

  const navLinkClass = ({ isActive }) => 
    `text-sm font-medium transition-colors hover:text-rust ${isActive ? 'text-rust' : 'text-gray-600'}`;

  // Effect to generate logo image data for MetallicPaint
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.font = 'bold 40px "DM Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('BytBrand', 200, 40);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "logo.png", { type: "image/png" });
          parseLogoImage(file).then(data => setLogoImageData(data.imageData));
        }
      });
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-cream-soft/80 backdrop-blur-md border-b border-border z-[60] flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="relative flex items-center h-12 w-48 overflow-hidden">
            {logoImageData ? (
               <div className="absolute inset-0 flex items-center justify-center">
                 <MetallicPaint imageData={logoImageData} params={{ patternScale: 2, refraction: 0.015, edge: 1, patternBlur: 0.005, liquid: 0.07, speed: 0.3 }} />
               </div>
            ) : (
              <span className="text-xl font-bold font-sans tracking-tight text-brown-dark">BytBrand</span>
            )}
          </Link>
          
          <ul className="hidden md:flex items-center gap-8">
            <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
            <li><NavLink to="/case-studies" className={navLinkClass}>Case Studies</NavLink></li>
            <li><NavLink to="/process" className={navLinkClass}>Process</NavLink></li>
          </ul>
          
          <div className="hidden md:flex items-center gap-6">
            <Magnet strength={0.5}>
              <Link to="/contact" className="bg-rust text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-rust-light transition-colors">
                Start a Project
              </Link>
            </Magnet>
          </div>
          
          <button className="text-black focus:outline-none" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Folder 
              color="currentColor" 
              size={0.6} 
              items={[open ? <X size={24} /> : <Menu size={24} />]} 
            />
          </button>
        </div>
      </nav>

      {/* Flowing Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50">
          <Suspense fallback={<div className="fixed inset-0 bg-black flex items-center justify-center text-white">Loading Menu...</div>}>
            <FlowingMenu 
              items={menuItems} 
              bgColor="var(--color-cream-soft)"
              textColor="var(--color-black)"
              marqueeBgColor="var(--color-rust)"
              marqueeTextColor="var(--color-white)"
              borderColor="rgba(0,0,0,0.1)"
              onClose={() => setOpen(false)}
            />
          </Suspense>
          <button 
            className="fixed top-5 right-5 z-[70] text-black"
            onClick={() => setOpen(false)}
          >
             <Folder 
              color="currentColor" 
              size={0.6} 
              items={[<X size={24} />]} 
            />
          </button>
        </div>
      )}
    </>
  );
}

