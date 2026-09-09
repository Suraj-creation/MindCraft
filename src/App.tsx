import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WhatWeDo } from './pages/WhatWeDo';
import { BusinessConsulting } from './pages/BusinessConsulting';
import { MarketResearch } from './pages/MarketResearch';
import { AITraining } from './pages/AITraining';
import { AIEnterpriseSolutions } from './pages/AIEnterpriseSolutions';
import { Industries } from './pages/Industries';
import { LifeSciences } from './pages/LifeSciences';
import { WhereWeWork } from './pages/WhereWeWork';
import { HowWeWork } from './pages/HowWeWork';
import { Explore } from './pages/Explore';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';

const PageRouter: React.FC = () => {
  const { currentPath } = useNavigation();

  // Normalize path without trailing slash (except root)
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  switch (normalizedPath) {
    case '/':
      return <Home />;
    case '/about':
      return <About />;
    case '/what-we-do':
      return <WhatWeDo />;
    case '/what-we-do/business-consulting':
      return <BusinessConsulting />;
    case '/what-we-do/market-research':
      return <MarketResearch />;
    case '/what-we-do/ai-training':
      return <AITraining />;
    case '/what-we-do/ai-enterprise-solutions':
      return <AIEnterpriseSolutions />;
    case '/industries':
      return <Industries />;
    case '/industries/life-sciences':
      return <LifeSciences />;
    case '/where-we-work':
      return <WhereWeWork />;
    case '/how-we-work':
      return <HowWeWork />;
    case '/explore':
      return <Explore />;
    case '/insights':
      return <Insights />;
    case '/contact':
      return <Contact />;
    default:
      // Graceful fallback to Home for unknown paths
      return <Home />;
  }
};

export function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col selection:bg-[var(--accent)] selection:text-white">
        <Navigation />
        <main className="flex-grow">
          <PageRouter />
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
