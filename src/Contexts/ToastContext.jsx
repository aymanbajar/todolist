import { createContext, useContext, useState } from "react";
import Toast from "../Components/Toast";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showToast(Message) {
    setOpen(true); 
    setMessage(Message);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast open={open} Message={message} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
