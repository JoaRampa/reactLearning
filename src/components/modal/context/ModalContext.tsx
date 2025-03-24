//creacion de contexto para el modal
import { createContext, useContext, useState } from "react";

export const ModalContext = createContext<{
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>
}>({
  state: false,
  setState: () => null
})

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<boolean>(false);

  return <ModalContext.Provider value={{ state, setState}}>{children}</ModalContext.Provider>
}

export const useModalContext = () => {
  const context = useContext(ModalContext)

  if(!context) {throw new Error("Modal is being used outaside it´s provider")}

  return context
}