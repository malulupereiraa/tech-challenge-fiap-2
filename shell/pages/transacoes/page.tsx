/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { createTransaction, deleteTransaction, listTransactions, showTransaction, updateTransaction } from "../../@core/services/transaction_service";
import transactionTypeDictionary from "../../@core/utils/transaction-type-dictionary";
import ToastTCF from "../../@core/components/Toast";
import BaseActions from "../../@core/components/ui/Datatable/BaseActions";
import CardTCF from "../../@core/components/ui/Card";
import ModalTCF from "../../@core/components/ui/Modal";
import ButtonTCF from "../../@core/components/ui/Button";
import DatatableTCF from "../../@core/components/ui/Datatable";
import TransacaoForm from "../../@core/components/forms/Transacao";

export default function Transacoes() {
  const [transactions, setTransactions] = useState<any>([]);
  const [rowId, setRowId] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("false");
  const itemClickedCurrent = useRef<any>();
  const [isModalTransacaoOpen, setIsModalTransacaoOpen] =
    useState<boolean>(false);
  const [typeTransaction, setTypeTransaction] = useState<string>("");
  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");
  const [dataToForm, setDataToForm] = useState<any>();

  const handleDeleteClose = () => {
    setIsModalOpen(false);
  };

  const handleCloseDeleteSubmit = async () => {
    await deleteTransaction(itemClickedCurrent.current).then(() => {
      setShowToast(true);
      setMessage("Transação Removida com Sucesso");
      setIcon("success");
      setToastTitle("Sucesso!");
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      setLoading(true);
      setIsModalOpen(false);
    });
  };

  const handleTransacaoModal = async (
    type: string,
    state: boolean,
    value?: any
  ) => {
    switch (type) {
      case "add":
        setModalTitle("Nova Transação");
        setIsModalTransacaoOpen(state);
        setTypeTransaction(type);
        break;
      case "edit":
        setModalTitle("Editar Transação");
        setTypeTransaction(type);
        await showTransaction(value).then((res: any) => {
          console.log(res);
          setDataToForm(res);
          setIsModalTransacaoOpen(state);
        });
        break;
      case "view":
        setModalTitle("Visualizar Transação");
        setTypeTransaction(type);
        await showTransaction(value).then((res: any) => {
          console.log(res);
          setDataToForm(res);
          setIsModalTransacaoOpen(state);
        });
        break;
      default:
        setIsModalTransacaoOpen(state);
        break;
    }
  };

  const handleShowDelete = (itemClicked: any) => {
    setIsModalOpen(true);
    itemClickedCurrent.current = itemClicked;
  };

  const handleTransacaoForm = async (e: Event, formData: any) => {
    e.preventDefault();
    switch (typeTransaction) {
      case "add":
        await createTransaction(formData)
          .then((res: any) => {
            const transacoesToTable = res;
            setTransactions(transacoesToTable);
            setShowToast(true);
            setMessage("Transação Realizada com Sucesso");
            setIcon("success");
            setToastTitle("Sucesso!");
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          })
          .catch((error: any) => {
            setShowToast(true);
            setMessage(error);
            setIcon("error");
            setToastTitle("Erro!");
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
            console.error(error);
            setLoading(false);
          });
        setLoading(true);
        setIsModalTransacaoOpen(false);
        break;
      case "edit":
        await updateTransaction(dataToForm.id, formData)
          .then((res: any) => {
            const transacoesToTable = res;
            setTransactions(transacoesToTable);
            setShowToast(true);
            setMessage("Transação Modificada com Sucesso");
            setIcon("success");
            setToastTitle("Sucesso!");
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          })
          .catch((error: any) => {
            setShowToast(true);
            setMessage(error);
            setIcon("error");
            setToastTitle("Erro!");
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
            console.error(error);
            setLoading(false);
          });
        setLoading(true);
        setIsModalTransacaoOpen(false);
        break;
      default:
        setLoading(true);
        setIsModalTransacaoOpen(false);
        break;
    }
  };

  const fetchTransactions = async () => {
    try {
      await listTransactions()
        .then((res: any) => {
          const options: any = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          };
          const transacoesToTable = res.map((item: any) => {
            return {
              ...item,
              amount: item.transactionType == "deposito" ? item.amount : item.amount * -1,
              transaction: transactionTypeDictionary.get(item.transactionType),
              date: new Date(item.date).toLocaleDateString("pt-br", options),
            };
          });
          setTransactions(transacoesToTable);
          setLoading(false);
        })
        .catch((error: any) => {
          setShowToast(true);
          setMessage(error);
          setIcon("error");
          setToastTitle("Erro!");
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          console.error(error);
          setLoading(false);
        });
    } catch (err: any) {
      <ToastTCF icon="error" message={err} title="Erro!" />;
      console.error(err);
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "Ações",
      headerClassName: "datatable-tcf",
      type: "actions",
      renderCell: (params) => (
        <BaseActions
          editAction={handleTransacaoModal}
          viewAction={handleTransacaoModal}
          deleteAction={handleShowDelete}
          {...{ params, rowId, setRowId }}
        />
      ),
    },
    {
      field: "transaction",
      headerName: "Transação",
      headerClassName: "datatable-tcf",
      width: 130,
    },
    {
      field: "amount",
      headerName: "Quantia",
      headerClassName: "datatable-tcf",
      width: 130,
    },
    {
      field: "date",
      headerName: "Data",
      headerClassName: "datatable-tcf",
      width: 400,
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  useEffect(() => {
    fetchTransactions();
  }, [loading]);

  return (
    <>
      <ToastTCF
        icon={icon}
        message={message}
        title={toastTitle}
        showToast={valueToast}
      />
          <CardTCF
            title="Listagem de Transações"
            body={
              <ListagemComponent
                columns={columns}
                transactions={transactions}
                paginationModel={paginationModel}
                loading={loading}
                functionSubmit={handleTransacaoForm}
                functionHandleModal={handleTransacaoModal}
                isModalOpen={isModalTransacaoOpen}
                modalTitle={modalTitle}
                typeTransaction={typeTransaction}
                dataToForm={dataToForm}
              />
            }
          />
      <ModalTCF
        title="Remover Transação"
        isOpen={isModalOpen}
        body={"Tem certeza que deseja remover essa transação?"}
        hasFooter={true}
        center={true}
        sizeModal="md"
        type="delete"
        onCloseAction={handleDeleteClose}
        onSubmitAction={handleCloseDeleteSubmit}
      />
    </>
  );
}

export function ListagemComponent(props: any) {
  return (
    <>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="d-flex justify-content-end mb-3"
        >
          <ButtonTCF
            variant={"green"}
            label={"Nova Transação"}
            disabled={false}
            size={"sm"}
            onClick={() => props.functionHandleModal("add", true)}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
          <DatatableTCF
            columns={props.columns}
            rows={props.transactions}
            paginationModel={props.paginationModel}
            loading={props.loading}
          />
        </Col>
      </Row>
      <ModalTCF
        isOpen={props.isModalOpen}
        body={
          <TransacaoForm
            isEdit={props.typeTransaction === "edit"}
            isView={props.typeTransaction === "view"}
            formValues={props.dataToForm}
            showDatePicker={true}
            onSubmitAction={props.functionSubmit}
          />
        }
        title={props.modalTitle}
        hasFooter={false}
        center={true}
        sizeModal="md"
        type={"transacao"}
        onCloseAction={() => props.functionHandleModal("", false)}
      />
    </>
  );
}
