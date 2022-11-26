import { Routes, Route } from 'react-router-dom';

import { CountriesView } from 'pages/CountriesView';
import { NotFound } from 'pages/NotFound';
import CountryView from 'pages/CountryView';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<CountriesView />} />
        <Route path=":name" element={<CountryView />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
