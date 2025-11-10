import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SustainableFuelsPage from './pages/SustainableFuelsPage';
import CriticalMineralsPage from './pages/CriticalMineralsPage';
import DefenceEnergyPage from './pages/DefenceEnergyPage';
import TechnologyPage from './pages/TechnologyPage';
import ProjectsPage from './pages/ProjectsPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import BlogArticlePage from './pages/BlogArticlePage';
import BambooToolkitPage from './pages/BambooToolkitPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sustainable-fuels" element={<SustainableFuelsPage />} />
            <Route path="critical-minerals" element={<CriticalMineralsPage />} />
            <Route path="defence-energy" element={<DefenceEnergyPage />} />
            <Route path="technology" element={<TechnologyPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="bamboo-toolkit" element={<BambooToolkitPage />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="insights/:slug" element={<BlogArticlePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}
