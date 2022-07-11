import React from 'react';

import './App.css';
import { ContextProvider } from './context/context';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
