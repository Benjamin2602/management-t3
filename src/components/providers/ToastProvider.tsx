import React from "react";
import { Toaster } from "react-hot-toast";

interface ToastProps {
  children: React.ReactNode;
}

export const ToastProvider = (props: ToastProps) => {
  return (
    <>
      <Toaster position="top-center" />
      {props.children}
    </>
  );
};
