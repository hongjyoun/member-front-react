import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Tables from '@/pages/Tables';
import Home from '@/pages/Home';
import Dashboard from '@/pages/dashboard/Dashboard';
import AppLayout from '@/components/layout/AppLayout';

const AppRouter = () => {
  const renderRoutes = [
    <Route key={'/'} path={'/'} element={<Dashboard/>}/>,
    // <Route key={'/home'} path={'/home'} element={<Home/>}/>,
    <Route key={'/dashboard'} path={'/dashboard'} element={<Dashboard />}/>,
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