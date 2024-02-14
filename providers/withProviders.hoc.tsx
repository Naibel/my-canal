"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AlertProvider from "~/providers/AlertProvider";
import ModalProvider from "~/providers/ModalProvider";
import SearchProvider from "~/providers/SearchProvider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});

const withProviders = (WrappedComponent: React.ComponentType) => {
  const ComponentWithProviders = () => (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AlertProvider>
          <SearchProvider>
            <WrappedComponent />
          </SearchProvider>
        </AlertProvider>
      </ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
  return ComponentWithProviders;
};

export default withProviders;
