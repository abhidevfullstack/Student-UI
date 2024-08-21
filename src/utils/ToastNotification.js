import { Bounce, toast } from "react-toastify";

export function notify(message,type){
    const toastConfig = {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition:Bounce
    }
    if(type === "success"){
        return toast.success(message, toastConfig);
    }
    return toast.error(message, toastConfig)
    // return type === "success" ? toast.success(message, toastConfig) : toast.error(message, toastConfig)
}