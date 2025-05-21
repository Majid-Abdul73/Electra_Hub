import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for better initial load performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const TicketingAndVoting = lazy(() => import('./pages/TicketingAndVoting'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Purchase = lazy(() => import('./pages/Purchase'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<TicketingAndVoting />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/purchase/:id" element={<Purchase />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
