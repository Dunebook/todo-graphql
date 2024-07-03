import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import for React 18
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
