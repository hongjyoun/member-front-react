import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './routes/AppRouter';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ModalProvider } from '@/plugins/modal/ModalProvider';
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
      <ModalProvider>
        <AppRouter/>
      </ModalProvider>
  </QueryClientProvider>;
};

export default App;