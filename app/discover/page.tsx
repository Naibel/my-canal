"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AlertProvider from "~/views/AlertProvider";
import DiscoverContent from "~/views/Discover/DiscoverContent";
import ModalProvider from "~/views/ModalProvider";
import SearchProvider from "~/views/SearchProvider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function Discover() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AlertProvider>
          <SearchProvider>
            <DiscoverContent />
          </SearchProvider>
        </AlertProvider>
      </ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
