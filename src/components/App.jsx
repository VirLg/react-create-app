import { Route, Routes } from 'react-router-dom';
import Catalog from './pages/catalog/Catalog';
import Favorite from './pages/favorite/Favorite';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import FormAddCar from './pages/form/FormAddCar';

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
