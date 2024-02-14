"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import DiscoverContent from "~/views/Discover/DiscoverContent";
import AlertProvider from "~/views/Providers/AlertProvider";
import ModalProvider from "~/views/Providers/ModalProvider";
import SearchProvider from "~/views/Providers/SearchProvider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});

const Discover = () => (
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

export default Discover;
