/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderStyler } from "./HeaderContainer";
import Image from "next/image";
import { GrMenu } from "react-icons/gr";
import ModalTCF from "../../ui/Modal";
import CadastroForm from "../../forms/Cadastro";
import { useState } from "react";
import LoginForm from "../../forms/Login";
import ButtonTCF from "../../ui/Button";
import { themed } from "@/@theme/themed";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import ToastTCF from "../../Toast";
import { jwtDecode } from "jwt-decode";
import useAxiosAuth from "@/@core/hooks/useAxiosAuth";

export default function Header() {
  const router = useRouter();
  const [isModalCadastroOpen, setIsModalCadastroOpen] =
    useState<boolean>(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");
  const axiosAuth = useAxiosAuth();
  const { data: session } = useSession(); // os dados de sessão podem ser colocados no gerenciador de estados

  const handleOpen = (type: string) => {
    switch (type) {
      case "fullheight":
        setIsModalCadastroOpen(true);
        break;
      default:
        setIsModalLoginOpen(true);
    }
  };

  const handleClose = (type: string) => {
    switch (type) {
      case "fullheight":
        setIsModalCadastroOpen(false);
        break;
      default:
        setIsModalLoginOpen(false);
    }
  };

  const handleCadastroForm = async (formData: any) => {
    // TODO: function Cadastro Form
    if (Object.values(formData).indexOf("") === -1) {
      const token: string = session?.user.result.token;
      const user: any = jwtDecode(token);
      console.log(formData);
      const formattedFormData: any = {
        // ...formData,
        username: formData.name,
        email: formData.email,
        password: formData.password,
      };
      await axiosAuth
        .post(`/api/users`, formattedFormData)
        .then(() => {
          setShowToast(true);
          setMessage("Usuário Cadastrado com Sucesso");
          setIcon("success");
          setToastTitle("Sucesso!");
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          setIsModalCadastroOpen(false);
        })
        .catch((error: any) => {
          setShowToast(true);
          setMessage(error.response.data.message);
          setIcon("error");
          setToastTitle("Erro!");
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          console.error(error.response.data.message);
        });
    }
  };

  const handleLoginForm = async (formData: any) => {
    if (Object.values(formData).indexOf("") === -1) {
      try {
        const res = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });
        if (res && !res.error) {
          setIsModalLoginOpen(false);
          router.push("/home");
        } else {
          if (res && res.status === 401) {
            setShowToast(true);
            setMessage("Usuário não Cadastrado! Realize o seu cadastro!");
            setIcon("error");
            setToastTitle("Erro!");
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
            setIsModalLoginOpen(false);
          }
        }
      } catch (error) {}
    }
  };

  return (
    <>
      <ToastTCF
        icon={icon}
        message={message}
        title={toastTitle}
        showToast={valueToast}
      />
      <Col xs={12} sm={12} md={12} lg={12} className="p-0">
        <HeaderStyler>
          <header className="py-4 header_bg">
            <Container>
              <Row className="d-flex align-items-center justify-content-between">
                <Col
                  xs={12}
                  sm={12}
                  md={5}
                  lg={5}
                  className="d-none d-md-flex align-items-center gap-5"
                >
                  <Image
                    src="Logo.svg"
                    alt="Descrição da imagem"
                    className="header_img"
                    width={0}
                    height={0}
                  />
                  <div className="d-flex gap-4">
                    <label className="header_title">Sobre</label>
                    <label className="header_title">Serviços</label>
                  </div>
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  className="d-flex d-md-none justify-content-between align-items-center w-100"
                >
                  <div className="dropdown">
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <GrMenu
                        style={{
                          color: themed.themeColor.success,
                          fontSize: "32px",
                        }}
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#sobre">
                          Sobre
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#servicos">
                          Serviços
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="Logo.svg"
                    alt="Descrição da imagem"
                    className="header_img"
                    width={0}
                    height={0}
                  />
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  md={5}
                  lg={5}
                  className="d-none d-md-flex justify-content-end gap-3"
                >
                  <ButtonTCF
                    size={"sm"}
                    label={"Abrir Minha Conta"}
                    disabled={false}
                    variant={"green"}
                    onClick={() => handleOpen("fullheight")}
                  />
                  <ButtonTCF
                    size={"sm"}
                    label={"Já Tenho Conta"}
                    disabled={false}
                    variant={"green-outline"}
                    onClick={() => handleOpen("login")}
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </HeaderStyler>
      </Col>
      <ModalTCF
        isOpen={isModalCadastroOpen}
        body={<CadastroForm onSubmitAction={handleCadastroForm} />}
        title={" "}
        hasFooter={false}
        center={true}
        sizeModal="md"
        type={"fullheight"}
        onCloseAction={handleClose}
      />
      <ModalTCF
        isOpen={isModalLoginOpen}
        body={<LoginForm onSubmitAction={handleLoginForm} />}
        title={" "}
        hasFooter={false}
        center={true}
        sizeModal="md"
        type={"login"}
        onCloseAction={handleClose}
      />
    </>
  );
}
