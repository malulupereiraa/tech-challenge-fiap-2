import { Button, Modal } from "react-bootstrap";
import { ModalProps } from "../../../props/modal";
import ButtonTCF from "../Button";

const ModalTCF: React.FC<ModalProps> = ({
  isOpen,
  title,
  body,
  sizeModal,
  center,
  hasFooter,
  type,
  onCloseAction,
  onSubmitAction,
}) => {
  return (
    <>
      <Modal
        show={isOpen}
        onHide={() => onCloseAction(type)}
        centered={center !== undefined ? center : false}
        size={sizeModal !== undefined ? sizeModal : "md"}
        className={
          type ? (type === "delete" ? "delete-modal" : "home-modal") : ""
        }
      >
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{body}</Modal.Body>
        {hasFooter && (
          <Modal.Footer>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onCloseAction(type)}
            >
              Cancelar
            </Button>
            <ButtonTCF
              size={"sm"}
              label={"OK"}
              disabled={false}
              variant={"green"}
              onClick={onSubmitAction}
            />
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};
export default ModalTCF;
