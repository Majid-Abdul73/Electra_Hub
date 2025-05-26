import type { FC, ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;