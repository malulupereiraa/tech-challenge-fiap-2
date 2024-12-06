import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { BackgroundHome } from "./MainContainer";
import Image from "next/image";
import ButtonTCF from "../../ui/Button";
import { H1Bold, H3Bold } from "../../../../@theme/custom/FormStyles";

export default function Main() {
  const vantagens = [
    {
      icon: "img_home/Ícone Presente.svg",
      title: "Conta e cartão gratuitos",
      description:
        "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
    },
    {
      icon: "img_home/Ícone Saque.svg",
      title: "Saques sem custo",
      description:
        "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
    },
    {
      icon: "img_home/Ícone Pontos.svg",
      title: "Programa de pontos",
      description:
        "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
    },
    {
      icon: "img_home/Ícone Dispositivos.svg",
      title: "Seguro Dispositivos",
      description:
        "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
    },
  ];
  return (
    <main className="p-0">
      <BackgroundHome>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={5}
              className="d-flex align-items-center mb-3 mt-5 mt-lg-0"
            >
              <H1Bold>
                Experimente mais liberdade no controle da sua vida financeira.
                Crie sua conta com a gente!
              </H1Bold>
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} className="mb-3 mt-4">
              <Image
                className="main_image"
                src="img_home/Ilustração Banner.svg"
                width={0}
                height={0}
                alt="Logo do banco"
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="d-flex align-items-center justify-content-center  d-md-none gap-3 mb-4"
            >
              <Link href="/home">
                <ButtonTCF
                  size={"sm"}
                  label={"Abrir Minha Conta"}
                  disabled={false}
                  variant={"dark"}
                />
              </Link>
              <ButtonTCF
                size={"sm"}
                label={"Já Tenho Conta"}
                disabled={false}
                variant={"dark-outline"}
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="d-flex justify-content-center mb-4"
            >
              <H3Bold>Vantagens do nosso banco:</H3Bold>
            </Col>
          </Row>
          <Row>
            {vantagens.map((vantagem, index) => (
              <Col key={index} xs={12} sm={6} md={3} lg={3} className="mb-5">
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center"
                  >
                    <img
                      className="advantage_image"
                      src={vantagem.icon}
                      alt={vantagem.title}
                    />
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center text-center"
                  >
                    <h4 className="advantage_title">{vantagem.title}</h4>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center  text-center"
                  >
                    <span className="text-center advantage_text">
                      {vantagem.description}
                    </span>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </BackgroundHome>
    </main>
  );
}
