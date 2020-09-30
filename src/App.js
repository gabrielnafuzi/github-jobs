import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Footer from './components/Footer';
import JobsSearch from './pages/JobsSearch';
import JobDetails from './pages/JobDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobsSearch />} />
        <Route path="/details/:id" element={<JobDetails />} />
      </Routes>

      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
