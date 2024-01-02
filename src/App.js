import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import FormAddCar from './components/pages/form/FormAddCar';
import Catalog from './components/pages/catalog/Catalog';
import Favorite from './components/pages/favorite/Favorite';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/api/cars/catalog" element={<Catalog />} />
          <Route path="/api/cars/favorite" element={<Favorite />} />
          <Route path="/api/cars/add" element={<FormAddCar />} />
        </Route>
      </Routes>
    </div>
  );
};

/* */
