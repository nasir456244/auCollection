import "../styles/globals.css";
import { CollectBrisbaneProvider } from "@/context/CollectBrisbane";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SEO from 'next-seo.config'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Script from 'next/script'
import * as gtag from '@/lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()


  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  
  }, [router.events])

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        retry: false,
      }
    }
  });
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });`,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <CollectBrisbaneProvider>
        <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </CollectBrisbaneProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
