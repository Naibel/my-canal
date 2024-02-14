"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AlertProvider from "~/views/AlertProvider";
import ModalProvider from "~/views/ModalProvider";
import SearchProvider from "~/views/SearchProvider";
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

export default function Trending() {
  return (
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
}
