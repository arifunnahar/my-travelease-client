import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import HomeSection from '../HomeSection/HomeSection';

const MainLayout = () => {
  const location = useLocation();
  const homePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[1200px]">
        {homePage && <Hero />}
        <Outlet />
        {homePage && <HomeSection />}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

