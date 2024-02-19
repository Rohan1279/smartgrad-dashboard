import PropTypes from "prop-types";
import { createContext, useState } from "react";
import AuthContextProvider from "./AuthContextProvider";

export const GlobalContext = createContext(null)

const ContextProvider = ({children}) => {
    const [modal,setModal] = useState({isOpen:false, content: null, title: ''});

    const openModal = (content, title) => {
        setModal({isOpen:true, content, title});
    }

    const closeModal = () => {
        setModal({isOpen:false, content: null, title: ''});
    }

    const contextData = {
        modal,
        openModal,
        closeModal
    }

    return (
        <GlobalContext.Provider value={contextData}>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>            
        </GlobalContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextProvider;
