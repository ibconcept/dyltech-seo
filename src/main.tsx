import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import './index.css';

const App = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <SEO />
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">SEO Work Environment</h1>
          <p className="text-gray-600 mb-8">
            This repository is for optimizing SEO assets, meta tags, and schema data.
            Changes to the <code>public/</code> folder, <code>index.html</code>, and 
            <code>src/components/SEO.tsx</code> will be merged back to the main site.
          </p>
          <div className="space-y-4 text-left border-t pt-6">
            <h2 className="font-semibold text-lg text-blue-600">Tasks:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Optimize images in <code>public/</code></li>
              <li>Update <code>sitemap.xml</code> and <code>robots.txt</code></li>
              <li>Refine meta tags in <code>src/components/SEO.tsx</code></li>
              <li>Improve <code>index.html</code> base tags</li>
            </ul>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
