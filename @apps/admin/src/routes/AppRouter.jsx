import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '@/pages/dashboard/Dashboard';
import AppLayout from '@/components/layout/AppLayout';
import { MANAGE_ROUTES } from '@/routes/ManageRoutes';

const AppRouter = () => {
  const renderRoutes = [
    <Route key={'/'} path={'/'} element={<Dashboard/>}/>,
    <Route key={'/dashboard'} path={'/dashboard'} element={<Dashboard/>}/>,
    ...MANAGE_ROUTES(),
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