import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import router from "./routes/routes";
// const queryClient = new QueryClient();
import "react-photo-view/dist/react-photo-view.css";
import Modal from "./components/Modal/Modal";
import ContextProvider from "./contexts/ContextProvider";
import { useEffect } from "react";
// import config from "../components/Chatbot/config";
// import MessageParser from "../components/Chatbot/MessageParser";
// import ActionProvider from "../components/Chatbot/ActionProvider";
import Chatbot from "react-chatbot-kit";
import config from "./components/Chatbot/config";
import MessageParser from "./components/Chatbot/MessageParser";
import ActionProvider from "./components/Chatbot/ActionProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
        <Toaster richColors />
        <Modal />
        <div className="fixed bottom-5 right-5  ">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
