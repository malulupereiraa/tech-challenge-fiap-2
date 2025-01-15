/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEdit3 } from "react-icons/fi";
import Container from "./Container";
import Button from "../ui/Button";
import { Divider } from "@mui/material";
import {
  Col,
  OverlayTrigger,
  Placeholder,
  Row,
  Tooltip,
} from "react-bootstrap";
import { WidgetsCardProps } from "@/@core/props/widgets-card";
import ModalTCF from "../ui/Modal";
import { useEffect, useState } from "react";
import SelectWidgetsForm from "../forms/Select-Widgets";
import CreditCardTCF from "../CreditCard";
import HeaderContainer from "./HeaderContainer";
import WeatherWidget from "../WeatherWidget";

const WidgetCardTCF: React.FC<WidgetsCardProps> = ({
  loading,
  userSession,
  transactions,
  setWidgets,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [widgetsState, setWidgetsState] = useState<any>();
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Gerenciar Widgets
    </Tooltip>
  );

  const placeholder = (): JSX.Element => {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="section-placeholder">
            {[1, 2].map((index: number) => (
              <div key={index} className="section-item-placeholder">
                <h6>
                  <Placeholder animation="wave">
                    <Placeholder xs={4} />
                  </Placeholder>
                </h6>
                <div>
                  <Placeholder animation="wave">
                    <Placeholder xs={12} />
                  </Placeholder>
                </div>
                <div>
                  <Placeholder animation="wave">
                    <Placeholder xs={8} />
                  </Placeholder>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    );
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (value: any) => {
    setWidgetsState(value);
    setWidgets(value);
    setIsModalOpen(false);
  };

  const handleWidgets = () => {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          {widgetsState.card && (
            <CreditCardTCF user={userSession} transactions={transactions} />
          )}
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
        {widgetsState.weather && <WeatherWidget />}
        </Col>
      </Row>
    );
  };

  useEffect(() => {
    if (
      userSession.widgets &&
      Object.keys(userSession.widgets).length !== 0 &&
      userSession.widgets.constructor === Object
    ) {
      if (
        userSession.widgets.card !== false ||
        userSession.widgets.weather !== false
      ) {
        setWidgetsState(userSession.widgets);
      } else {
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="text-center">
              <h6>
                Clique no Botão de Gerenciar, para Selecionar os seus Widgets!
              </h6>
            </div>
          </Col>
        </Row>;
      }
    }
  }, [userSession]);

  return (
    <>
      <Container>
        <HeaderContainer>
          <h3>Widgets</h3>
          <div className="actions">
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <span>
                <Button
                  size="sm"
                  icon={<FiEdit3 />}
                  rounded={true}
                  onClick={() => setIsModalOpen(true)}
                  disabled={loading}
                />
              </span>
            </OverlayTrigger>
          </div>
        </HeaderContainer>
        <Divider />
        {loading ? (
          placeholder()
        ) : widgetsState ? (
          handleWidgets()
        ) : (
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="text-center">
                <h6>
                  Clique no Botão de Gerenciar, para Selecionar os seus Widgets!
                </h6>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <ModalTCF
        title="Gerenciar Widgets"
        isOpen={isModalOpen}
        body={
          <SelectWidgetsForm
            onSubmitAction={handleSubmit}
            onCloseAction={handleClose}
            widgetsState={widgetsState}
          />
        }
        hasFooter={false}
        center={true}
        sizeModal="md"
        type=""
        onCloseAction={handleClose}
      />
    </>
  );
};
export default WidgetCardTCF;
