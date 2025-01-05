/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Col, Spinner } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { ButtonProps } from "../../../props/button";

const ButtonTCF: React.FC<ButtonProps> = ({
  label,
  size,
  disabled,
  rounded,
  variant,
  type,
  icon,
  onClick,
}) => {
  const buttonClassName = () => {
    if (rounded && icon) return "rounded-circle w-icon";
    if (rounded) return "rounded-circle";
    if (icon) return "w-icon";
  };

  return (
    <Button
      type={type ? type : undefined}
      variant={variant ? variant : "primary"}
      size={size}
      disabled={disabled === true}
      className={buttonClassName()}
      onClick={onClick}
    >
      {icon ? icon : label}
    </Button>
  );
};
export default ButtonTCF;
