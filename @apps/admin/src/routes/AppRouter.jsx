import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SearchMembers from '@/pages/manage/SearchMembers';
import Dashboard from '@/pages/dashboard/Dashboard';
import AppLayout from '@/components/layout/AppLayout';

const AppRouter = () => {
  const renderRoutes = [
    <Route key={'/'} path={'/'} element={<Dashboard/>}/>,
    <Route key={'/dashboard'} path={'/dashboard'} element={<Dashboard />}/>,
    <Route key={'/members'} path={'/search-members'} element={<SearchMembers/>}/>,
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