import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Tables from '@/pages/Tables';
import Home from '@/pages/Home';

const AppRouter = () => {
    const renderRoutes = [
        <Route key={'/'} path={'/'} element={<Home />} />,
        <Route key={'/home'} path={'/home'} element={<Home />} />,
        <Route key={'/tables'} path={'/tables'} element={<Tables />} />,
        <Route key={'*'} element={<Navigate to="/home" />} />,
    ]

    return (
        <BrowserRouter>
            <Routes>{renderRoutes}</Routes>
        </BrowserRouter>
    );
};

export default AppRouter;