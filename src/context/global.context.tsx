import { createContext, ReactNode,useState, useContext } from "react";

interface GlobalContextType{
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}
interface GlobalProps {
  children: ReactNode
}

const EmptyGlobalState: number = 0

export const GlobalContext = createContext<GlobalContextType>({
  value: 0,
  setValue: () => {}
});

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState)

  return(
    <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if(!context.value && context.value !== 0) {
    throw new Error("GlobalContext must be used within a GlobalContextProvider")
  }

  return context;
}