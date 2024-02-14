"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AlertProvider from "~/providers/AlertProvider";
import ModalProvider from "~/providers/ModalProvider";
import NavbarSearchProvider from "~/providers/NavbarSearchProvider";

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
          <NavbarSearchProvider>
            <WrappedComponent />
          </NavbarSearchProvider>
        </AlertProvider>
      </ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
  return ComponentWithProviders;
};

export default withProviders;
