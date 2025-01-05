import Footer from "../../../@core/components/Home/Footer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<FooterProps> = {
  title: "Components_TCF/ErrorPage/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#004D61" }],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    services: {
      description: "Lista de serviços exibidos no Footer",
      control: { type: "object" },
    },
    contact: {
      description: "Informações de contato no Footer",
      control: { type: "object" },
    },
    developedWith: {
      description: "Texto de rodapé informando como foi desenvolvido",
      control: { type: "text" },
    },
    logoSrc: {
      description: "Caminho da logo exibida no Footer",
      control: { type: "text" },
    },
    socialMedia: {
      description: "Ícones das redes sociais",
      control: { type: "object" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {
  args: {
    services: ["Conta corrente", "Conta PJ", "Cartão de crédito"],
    contact: {
      phone: "0800 004 250 08",
      email: "teste@gmail.com",
      supportEmail: "ouvidoria@outlook.com",
    },
    developedWith: "Desenvolvido com Amor",
    logoSrc: "img_home/Logo Bytebank Branco.svg",
    socialMedia: [
      { imgSrc: "img_home/Instagram.svg", alt: "Instagram" },
      { imgSrc: "img_home/Whatsapp.svg", alt: "WhatsApp" },
      { imgSrc: "img_home/Youtube.svg", alt: "YouTube" },
    ],
  },
};
