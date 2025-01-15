import ButtonTCF from "@/@core/components/ui/Button";
import axios from "@/@core/lib/axios";
import { CardTitleCustom } from "@/@theme/custom/CardTCF";
import { ButtonDelete, ContainerFile, ContainerUpload, InputUpload } from "@/@theme/custom/ModalUpload";
import { Alert, AlertColor, AlertPropsColorOverrides, LinearProgress, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const ModalUploadTransacoes: React.FC<ModalProps> = ({
  isOpen,
  body,
  sizeModal,
  center,
  hasFooter,
  type,
  onCloseAction,
  onSubmitAction,
}) => {
const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file ? file : null);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

     const handleUpload = async () => {
    if (!selectedFile) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post("http://localhost:500/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resposta da API:", response.data);

      setSnackbarMessage("Upload realizado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Erro no upload:", error);

      setSnackbarMessage("Erro ao realizar o upload. Tente novamente.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
      setSelectedFile(null);
    }
  };
    
    const handleSnackbarClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
      if (reason === "clickaway") {
        console.log(event);
        return;
        }
        setSnackbarOpen(false);
  };
  
   return (
    <>
      <Modal
        show={isOpen}
        onHide={() => onCloseAction(type)}
        centered={center !== undefined ? center : false}
        size={sizeModal !== undefined ? sizeModal : "md"}
        className={"home-modal"}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <CardTitleCustom tabIndex={0}>Transações em Lote</CardTitleCustom>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Upload de arquivo ou progresso */}
          {!selectedFile ? (
            <ContainerUpload tabIndex={0}>
              <InputUpload
                type="file"
                accept=".csv, .xls, .xlsx"
                onChange={handleFileChange}
              />
              Upload.csv
            </ContainerUpload>
          ) : isLoading ? (
            <LinearProgress />
          ) : (
            <ContainerFile>
              <span>{selectedFile?.name}</span>
              <ButtonDelete className="remove-file-btn" onClick={handleRemoveFile}>
                <MdDelete />
              </ButtonDelete>
            </ContainerFile>
          )}
        </Modal.Body>
        {hasFooter && (
          <Modal.Footer>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onCloseAction(type)}
              disabled={isLoading} // Desativa o botão "Cancelar" durante o upload
            >
              Cancelar
            </Button>
            <ButtonTCF
              size={"sm"}
              label={isLoading ? "Enviando..." : "OK"}
              disabled={isLoading || !selectedFile} // Desativa o botão durante o upload ou se nenhum arquivo estiver selecionado
              variant={"green"}
              onClick={handleUpload}
            />
          </Modal.Footer>
        )}
      </Modal>

     <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ zIndex: 9999 }} // Garante que está acima de outros elementos
        >
        <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
        >
            {snackbarMessage}
        </Alert>
    </Snackbar>
    </>
  );
};
export default ModalUploadTransacoes;
