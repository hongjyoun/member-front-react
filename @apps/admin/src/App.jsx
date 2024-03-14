import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './routes/AppRouter';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    }
  },
});

const App = () => {
  return <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <CssBaseline/>
      <AppRouter/>
    </ThemeProvider>
  </QueryClientProvider>;
};

export default App;