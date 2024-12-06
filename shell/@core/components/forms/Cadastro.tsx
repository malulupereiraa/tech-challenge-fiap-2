import { Col, Form, Row } from "react-bootstrap";
import Image from "next/image";
import { CadastroFormProps } from "../../props/cadastro-form";
import ButtonTCF from "../ui/Button";
import * as formik from "formik";
import * as yup from "yup";
import { RowCentered } from "../../../@theme/custom/RowCenter";
import {
  FormLabelStrong,
  PStrong,
  FormCheckCustom,
} from "../../../@theme/custom/FormStyles";

const CadastroForm: React.FC<CadastroFormProps> = ({ onSubmitAction }) => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required("Por favor, digite o seu nome!"),
    email: yup
      .string()
      .email("Por favor, digite um e-mail válido!")
      .required("Por favor, digite seu e-mail"),
    password: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Os Termos devem ser aceitos."),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          email: "",
          password: "",
          terms: false,
        }}
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
            <RowCentered className="mb-5">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Image
                  src="forms/IlustracaoCadastro.svg"
                  width={354.96}
                  height={261.6}
                  alt="Ilustração Cadastro"
                />
              </Col>
            </RowCentered>
            <Row className="mb-1">
              <Col xs={12} sm={12} md={12} lg={12}>
                <PStrong>
                  Preencha os campos abaixo para criar sua conta corrente!
                </PStrong>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FormLabelStrong>Nome</FormLabelStrong>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu nome completo"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <FormLabelStrong>E-mail</FormLabelStrong>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu e-mail"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <FormLabelStrong>Senha</FormLabelStrong>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group className="mb-3">
                  <FormCheckCustom
                    required
                    name="terms"
                    label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>
              </Col>
            </Row>
            <RowCentered>
              <Col xs={12} sm={12} md={12} lg={12}>
                <ButtonTCF
                  variant={"orange"}
                  label={"Criar Conta"}
                  disabled={!(dirty && isValid)}
                  size={"sm"}
                  type="submit"
                />
              </Col>
            </RowCentered>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default CadastroForm;
