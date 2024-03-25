import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './routes/AppRouter';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ModalProvider } from '@/plugins/modal/ModalProvider';

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
    <ReactQueryDevtools initialIsOpen={false} />
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <CssBaseline/>
      <ModalProvider>
        <AppRouter/>
      </ModalProvider>
    </ThemeProvider>
  </QueryClientProvider>;
};

export default App;