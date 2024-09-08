import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default Router;
