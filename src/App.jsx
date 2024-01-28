import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthContextProvider>
    </>
  );
}

export default App;
