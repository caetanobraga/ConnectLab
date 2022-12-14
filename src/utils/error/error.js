import { toast } from "react-toastify";

export const notifyError = (msg) =>
  toast.error(msg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });