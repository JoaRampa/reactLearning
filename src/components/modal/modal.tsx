//portals
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context/ModalContext"
import "./modal.css"

interface Props {
  children: React.ReactNode
}

export const Modal = ({children}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const {state, setState} = useModalContext();
  const closeModal = () => {setState(false)}
  const modalRoot = document.getElementById("modal")
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => { e.stopPropagation };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") { 
        setState(false)
      }
    }
    if(state) {
      document.addEventListener("keydown", handleEscape)
    }

    return() => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [setState, state])

  if(!state || !modalRoot) return null;

  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" ref={modalRef} onClick={handleContentClick}>
        {children}
        <button className="close-modal" onClick={closeModal}>Close</button>
      </div>
    </div>
    , modalRoot
  )
}