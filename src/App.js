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

// const activities = [
//   { title: "HikingSo", date: new Date("2019-06-30") },
//   { title: "Shopping", date: new Date("2019-06-10") },
//   { title: "Trekking", date: new Date("2019-06-20") },
// ];

//const newestActivities = activities.slice().sort((a, b) => b.date - a.date);
//const oldestActivities = activities.slice().sort((a, b) => a.date - b.date);

//console.log(newestActivities);
//console.log(oldestActivities);

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
