import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import router from "./routes/routes";
// const queryClient = new QueryClient();
import "react-photo-view/dist/react-photo-view.css";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
        <Toaster richColors />
      </ContextProvider>
    </>
  );
}

export default App;
