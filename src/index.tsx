import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_it from './translations/it/common.json';
import common_en from './translations/en/common.json';
import { FocusProvider } from './context/FocusContext';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    it: {
      common: common_it,
    },
  },
});

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <FocusProvider>
        <App />
      </FocusProvider>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
