import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Tables from '@/pages/Tables';
import Home from '@/pages/Home';
import AppLayout from '@/components/layout/AppLayout';

const AppRouter = () => {
  const renderRoutes = [
    <Route key={'/'} path={'/'} element={<Home/>}/>,
    <Route key={'/home'} path={'/home'} element={<Home/>}/>,
    <Route key={'/tables'} path={'/tables'} element={<Tables/>}/>,
    <Route key={'*'} element={<Navigate to="/home"/>}/>,
  ];

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>{renderRoutes}</Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRouter;