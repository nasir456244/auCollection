import "../styles/globals.css";
import { CollectBrisbaneProvider } from "@/context/CollectBrisbane";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        retry: false,
      }
    }
  });
  return (
      <QueryClientProvider client={queryClient}>
        <CollectBrisbaneProvider>
          <Component {...pageProps} />
        </CollectBrisbaneProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default MyApp;
