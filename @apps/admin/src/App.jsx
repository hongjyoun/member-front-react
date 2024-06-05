import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './routes/AppRouter';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ModalProvider } from '@/plugins/modal/ModalProvider';
import { AuthProvider } from '@/provider/AuthProvider';
import '@/assets/main.less';

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
    <AuthProvider>
      <ModalProvider>
        <AppRouter/>
      </ModalProvider>
    </AuthProvider>
  </QueryClientProvider>;
};

export default App;