import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Global } from "@emotion/react";

import AppRoutes from "./components/AppRoutes";
import { GlobalStateProvider } from "./contexts/globalStateContext";

import globalStyles from "./styles/globalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <Global styles={globalStyles} />
        <AppRoutes />
      </GlobalStateProvider>
    </QueryClientProvider>
  );
}

export default App;
