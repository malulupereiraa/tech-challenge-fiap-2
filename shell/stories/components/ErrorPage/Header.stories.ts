import Header from "../../../@core/components/Home/Header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<HeaderProps> = {
  title: "Components_TCF/ErrorPage/Header",
  component: Header,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#004D61" }],
      default: "Dark",
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logoSrc: {
      description: "Caminho da logo exibida no Header",
      control: { type: "text" },
    },
    links: {
      description: "Links exibidos no menu do Header",
      control: { type: "object" },
    },
    buttons: {
      description: "Botões exibidos no Header",
      control: { type: "object" },
    },
    themedColor: {
      description: "Cor usada para ícones temáticos no Header",
      control: { type: "color" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
  args: {
    logoSrc: "/Logo.svg",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
    ],
    buttons: [
      { label: "Abrir Minha Conta", href: "/home", variant: "green" },
      { label: "Já Tenho Conta", href: "#", variant: "green-outline" },
    ],
    themedColor: "#28a745",
  },
};
