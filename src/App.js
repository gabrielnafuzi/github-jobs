import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Footer from './components/Footer';
import JobsSearch from './pages/JobsSearch';
import JobDescription from './pages/JobDescription';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to="/" element={<JobsSearch />} />
        <Route to="/:job" element={<JobDescription />} />
      </Routes>

      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
