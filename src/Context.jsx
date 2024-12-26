import { createContext, useContext, useState } from "react";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppProvider = ({children}) => {
    const [isSideBarOpened, setIsSideBarOpened] = useState();
    const [pageId, setPageId] = useState(null)
   const toggleSideBar = () => {
        setIsSideBarOpened(!isSideBarOpened)
    }
    return (
      <GlobalContext.Provider
        value={{ isSideBarOpened, toggleSideBar, pageId, setPageId }}
      >
        {children}
      </GlobalContext.Provider>
    );
}


export default AppProvider;