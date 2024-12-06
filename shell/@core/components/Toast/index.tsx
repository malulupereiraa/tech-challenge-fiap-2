"use client";

import { useState, useEffect } from "react";
import BaseToast from "react-bootstrap/Toast";
import BaseToastContainer from "react-bootstrap/ToastContainer";
import ToastContainer from "./ToastContainer";
import ToastIconWrapper from "./ToastIconWrapper";
import ToastProps from "../../props/toast";


const ToastTCF: React.FC<ToastProps> = ({
  icon = "info",
  message,
  title,
  autohideDelay,
  absolutePosition = true,
  showToast = false,
}) => {
  const [show, setShow] = useState(showToast);
  const autohideEnabled = autohideDelay ? true : false;
  const close = () => setShow(false);

  const contents: React.JSX.Element = (
    <BaseToast
      delay={autohideDelay}
      show={show}
      onClose={close}
      autohide={autohideEnabled}
    >
      <BaseToast.Body>
        <div className="toast-content">
          <div>
            <ToastIconWrapper iconName={icon} />
          </div>
          <div>
            {title && <h6>{title}</h6>}
            {message}
          </div>
        </div>
      </BaseToast.Body>
    </BaseToast>
  );

  useEffect(() => {
    setShow(showToast)
  }, [showToast])

  return (
    <ToastContainer>
      {absolutePosition ? (
        <BaseToastContainer position="top-center">
          {contents}
        </BaseToastContainer>
      ) : (
        contents
      )}
    </ToastContainer>
  );
};
export default ToastTCF;
