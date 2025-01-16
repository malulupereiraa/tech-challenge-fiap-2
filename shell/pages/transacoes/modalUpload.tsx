import ButtonTCF from "@/@core/components/ui/Button";
import useAxiosAuth from "@/@core/hooks/useAxiosAuth";
import axios from "@/@core/lib/axios";
import transactionsService from "@/@core/services/api-node/transactions.service";
import { CardTitleCustom } from "@/@theme/custom/CardTCF";
import { ButtonDelete, ContainerFile, ContainerUpload, InputUpload } from "@/@theme/custom/ModalUpload";
import { Alert, AlertColor, AlertPropsColorOverrides, LinearProgress, Snackbar } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

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
  const { user } = useSelector((state: any) => state.user);
  const axiosHookHandler: any = useAxiosAuth();
  
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
      const token: string = user.token;
      const decodedUser: any = jwtDecode(token);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("userId", decodedUser.userId);
      const response = await axios.post(
        "/api/users/transactions/import",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, 
          }
        }
      );
      console.log("Resposta da API:", response.data);

      setSnackbarMessage("Upload realizado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);      
      onCloseAction(type);
      setSelectedFile(null);
      onSubmitAction();
    } catch (error: any) {
      console.error("Erro no upload:", error);

      setSnackbarMessage(
        error.response?.data?.message || "Erro ao realizar o upload. Tente novamente."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
      setSelectedFile(null);
      setSnackbarOpen(false);
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
