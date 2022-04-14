import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Global } from "@emotion/react";

import { GlobalStateProvider } from "./contexts/globalStateContext";

import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageRoutes from "./components/PageRoutes";

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
        <PageHeader />
        <main style={{ padding: "1rem 0", minHeight: "80vh" }}>
          <PageRoutes />
        </main>
        <PageFooter />
      </GlobalStateProvider>
    </QueryClientProvider>
  );
}

export default App;
