import { CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './routes/AppRouter';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyles';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    )
}

export default App;