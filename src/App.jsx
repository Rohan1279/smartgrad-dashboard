import { FaHatWizard } from "react-icons/fa";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import router from "./routes/routes";
// const queryClient = new QueryClient();
import { useState } from "react";
import "react-photo-view/dist/react-photo-view.css";
import Modal from "./components/Modal/Modal";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  const [botView, setBotView] = useState(false);

  console.log(botView);

  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
        <Toaster richColors />
        <Modal />
      </ContextProvider>

      <div className="absolute bottom-12 right-12 bg-blue-500 rounded-full p-2.5" onClick={() => setBotView(prev => !prev)}>
      <iframe src="https://langchainchatbot-3unenkkbsvf7sttsp4hzct.streamlit.app/?embed_options=light_theme&embed=true" className={`absolute bottom-16 right-0 ${botView ? "block" : "hidden"}`} width="340" height="500"></iframe>
      <FaHatWizard className="text-white animate-bounce" size={40} />
      </div>
    </>
  );
}

export default App;
