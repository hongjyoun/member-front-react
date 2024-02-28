import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyles';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CssBaseline />
            hahaha
        </ThemeProvider>
    )
}

export default App;