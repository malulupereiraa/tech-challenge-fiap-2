import { Col, Container, Row } from "react-bootstrap";
import { FooterStyler } from "./FooterContainer";

export default function Footer() { 
    return (
        <FooterStyler className='p-0'>
          <footer className="bg-black py-4 pb-5">
            <Container>
              <Row className="pt-4">
    
                <Col xs={12} sm={4} md={4} className="mb-3 mb-md-0 text-center text-md-start">
                  <ul className="list-unstyled d-flex flex-column  align-items-md-start footer_ul">
                    <li className="mb-2 footer_title">Serviços</li>
                    <li className="mb-1">Conta corrente</li>
                    <li className="mb-1">Conta PJ</li>
                    <li className="mb-1">Cartão de crédito</li>
                  </ul>
                </Col>
    
    
                <Col xs={12} sm={4} md={4} className="mb-3 mb-md-0 text-center text-md-start">
                  <ul className="list-unstyled d-flex flex-column  align-items-md-start footer_ul">
                    <li className="mb-2 footer_title">Contato</li>
                    <li className="mb-1">0800 004 250 08</li>
                    <li className="mb-1">teste@gmail.com</li>
                    <li className="mb-1">ouvidoria@outlook.com</li>
                  </ul>
                </Col>
    
    
                <Col xs={12} sm={4} md={4} className="d-flex flex-column align-items-center mb-3 mb-md-0">
                  <span className='footer_title'>Desenvolvido com Amor</span>
                  <img
                    src="img_home/Logo Bytebank Branco.svg"
                    alt="Descrição da imagem"
    
                    className="mb-3 mt-3 footer_img"
                  />
                  <div className="d-flex gap-3 justify-content-center">
                    <img
                      src="img_home/Instagram.svg"
                      alt="Descrição da imagem"
                      className='footer_img_logo'
                    />
                    <img
                      src="img_home/Whatsapp.svg"
                      alt="Descrição da imagem"
                      className='footer_img_logo'
                    />
                    <img
                      src="img_home/Youtube.svg"
                      alt="Descrição da imagem"
                      className='footer_img_logo'
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </FooterStyler>
      );
}
