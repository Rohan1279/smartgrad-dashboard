import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { Toaster } from "./components/ui/sonner";
import { QueryClient } from "@tanstack/react-query";
// const queryClient = new QueryClient();
import "react-photo-view/dist/react-photo-view.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <Toaster richColors />
      </AuthContextProvider>
    </>
  );
}

export default App;
