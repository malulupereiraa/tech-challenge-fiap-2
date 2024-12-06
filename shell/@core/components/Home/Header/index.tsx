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
import { navigate } from "@/pages/actions";

export default function Header() {
  const [isModalCadastroOpen, setIsModalCadastroOpen] =
    useState<boolean>(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);

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

  const handleCadastroForm = (formData: any) => {
    // TODO: function Cadastro Form
    if (Object.values(formData).indexOf("") === -1)
      setIsModalCadastroOpen(false);
  };

  const handleLoginForm = (formData: any) => {
    // TODO: function Login Form
    if (Object.values(formData).indexOf("") === -1) {
      setIsModalLoginOpen(false);
      navigate();
    }
  };

  return (
    <>
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
