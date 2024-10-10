import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/App.css";
import TanStackQeuryComponent from "./TanStackQeuryComponent";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// useEffect test
// import UseEffectComponent from "./UseEffectComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TanStackQeuryComponent />
        {/* <UseEffectComponent /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
