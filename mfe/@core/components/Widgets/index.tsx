/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEdit3 } from "react-icons/fi";
import Container from "./Container";
import Button from "../ui/Button";
import { Divider } from "@mui/material";
import { OverlayTrigger, Placeholder, Tooltip } from "react-bootstrap";
import { WidgetsCardProps } from "@/@core/props/widgets-card";
import ModalTCF from "../ui/Modal";
import { useState } from "react";
import SelectWidgetsForm from "../forms/Select-Widgets";
import CreditCardTCF from "../CreditCard";

const WidgetCardTCF: React.FC<WidgetsCardProps> = ({
  loading,
  userSession,
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
    );
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (value: any) => {
    // console.log(value);
    setWidgetsState(value);
    setIsModalOpen(false);
  };

  const handleWidgets = () => {
    return (
      <div>
        {widgetsState.card && <CreditCardTCF />}
        {widgetsState.weather && <div>Weather</div>}
      </div>
    );
  };
  return (
    <>
      <Container>
        <header>
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
        </header>
        <Divider />
        {loading
          ? placeholder()
          : widgetsState
          ? handleWidgets()
          : "Clique no Botão de Gerenciar, para Selecionar os seus Widgets!"}
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
