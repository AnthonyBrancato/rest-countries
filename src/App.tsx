import { Routes, Route } from 'react-router-dom';

import { CountriesView } from 'pages/CountriesView';
import { NotFound } from 'pages/NotFound';

import { Layout } from './components';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CountriesView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
