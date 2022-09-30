import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
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
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <CollectBrisbaneProvider>
          <Component {...pageProps} />
        </CollectBrisbaneProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
