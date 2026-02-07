import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders, AppRoutes } from './app/index';
import './index.css';
import './shared/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </StrictMode>
);
