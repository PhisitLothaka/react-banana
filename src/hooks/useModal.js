import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export default function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("ModalContext was use outside ModalContextProvider");
  return context;
}
