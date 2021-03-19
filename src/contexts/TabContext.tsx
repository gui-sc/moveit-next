import { createContext, ReactNode, useState } from "react";

interface TabProviderProps{
    children: ReactNode;
}

interface TabContextData{
    aba: boolean;
    ativarHome: ()=>void;
    ativarLogin:()=>void;
}

export const TabContext = createContext({} as TabContextData);

export function TabProvider({children}: TabProviderProps){
    const [aba, setAba] = useState(false);

    function ativarHome(){
        setAba(true);
    }
    function ativarLogin(){
        setAba(false);
    }

    return (
        <TabContext.Provider value={{
            aba,ativarHome,ativarLogin
        }}>
            {children}
        </TabContext.Provider>
    );
}