import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultToastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 3000,
};

const Toast = {
  success: (message) => {
    toast.success(message, {
      ...defaultToastOptions,
      style: { background: "#3cb371", color: "#ffffff" }, // Green background
    });
  },
  error: (message) => {
    toast.error(message, {
      ...defaultToastOptions,
      style: { background: "#ff0000", color: "#ffffff" }, // Red background
    });
  },
  warning: (message) => {
    toast.warning(message, {
      ...defaultToastOptions,
      style: { background: "#ffa500", color: "#ffffff" }, // Orange background
    });
  },
};

const ToastComponent = () => {
  return <ToastContainer />;
};

export { Toast, ToastComponent };
