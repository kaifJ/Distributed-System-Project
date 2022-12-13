import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
    return (
        <ToastContainer draggable={false} hideProgressBar theme="colored" />
    )
}

export default Toast