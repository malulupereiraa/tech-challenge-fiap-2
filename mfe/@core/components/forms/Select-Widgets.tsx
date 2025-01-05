/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Form, Row } from "react-bootstrap";
import { SelectWidgetsFormProps } from "../../props/select-widgets-form";
import ButtonTCF from "../ui/Button";
import * as formik from "formik";
import * as yup from "yup";
import { PStrong, FormCheckCustom } from "../../../@theme/custom/FormStyles";
import { useEffect, useRef, useState } from "react";

const SelectWidgetsForm: React.FC<SelectWidgetsFormProps> = ({
  onSubmitAction,
  onCloseAction,
  widgetsState,
}) => {
  const { Formik } = formik;
  const [loading, setLoading] = useState(true);
  const initialValue = useRef<any>({
    card: false,
    weather: false,
  });

  const schema = yup.object().shape({
    card: yup.bool().notRequired(),
    weather: yup.bool().notRequired(),
  });

  useEffect(() => {
    console.log(widgetsState);
    setLoading(true);
    !widgetsState
      ? ((initialValue.current = {
          card: false,
          weather: false,
        }),
        setLoading(false))
      : ((initialValue.current = widgetsState), setLoading(false));
    console.log(initialValue.current);
  }, [widgetsState]);
  return (
    <>
      {!loading && (
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={initialValue.current}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
            dirty,
            isValid,
          }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                if (onSubmitAction) {
                  onSubmitAction(values);
                }
              }}
            >
              <Row className="mb-1">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <PStrong>Escolha os Widgets que deseja exibir!</PStrong>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form.Group className="mb-3">
                    <FormCheckCustom
                      name="card"
                      label="Cartão"
                      onChange={handleChange}
                      checked={values.card}
                      isInvalid={!!errors.card}
                      feedback={
                        typeof errors.card === "string"
                          ? errors.card
                          : undefined
                      }
                      feedbackType="invalid"
                      id="validationFormik0"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form.Group className="mb-3">
                    <FormCheckCustom
                      name="weather"
                      label="Tempo"
                      onChange={handleChange}
                      checked={values.weather}
                      isInvalid={!!errors.weather}
                      feedback={
                        typeof errors.weather === "string"
                          ? errors.weather
                          : undefined
                      }
                      feedbackType="invalid"
                      id="validationFormik1"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3 text-end">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <span className="me-2">
                    <ButtonTCF
                      variant="secondary"
                      label={"Cancelar"}
                      size="sm"
                      onClick={onCloseAction}
                    />
                  </span>
                  <span>
                    <ButtonTCF
                      variant={"orange"}
                      label={"Salvar"}
                      disabled={widgetsState ? false : !(dirty && isValid)}
                      size={"sm"}
                      type="submit"
                    />
                  </span>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
export default SelectWidgetsForm;
