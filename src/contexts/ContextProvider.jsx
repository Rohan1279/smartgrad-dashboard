import PropTypes from "prop-types";
import { createContext, useState } from "react";
import AuthContextProvider from "./AuthContextProvider";

export const GlobalContext = createContext(null)

const ContextProvider = ({children}) => {
    const [modal,setModal] = useState();

    const contextData = {
        modal,
        setModal
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
