import { toast } from 'react-hot-toast';
const useToast = () => {
  const showToast = (message, type = 'success', bg = 'white') => {
    const textColor = bg !== 'white' ? 'white' : 'black';
    const toastOptions = {
      position: 'top-center',
      style: {
        backgroundColor: bg,
        color: textColor,
        fontSize: '13px',
      },
    };
    const toastMethod = toast[type] || toast;

    toastMethod(message, toastOptions);
  };
  return { showToast };
};

export default useToast;
