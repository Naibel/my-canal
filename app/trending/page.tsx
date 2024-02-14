"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AlertProvider from "~/views/Providers/AlertProvider";
import ModalProvider from "~/views/Providers/ModalProvider";
import SearchProvider from "~/views/Providers/SearchProvider";
import TrendingContent from "~/views/Trending/TrendingContent";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});

const Trending = () => (
  <QueryClientProvider client={queryClient}>
    <ModalProvider>
      <AlertProvider>
        <SearchProvider>
          <TrendingContent />
        </SearchProvider>
      </AlertProvider>
    </ModalProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default Trending;
