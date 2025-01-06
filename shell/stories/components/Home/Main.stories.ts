import Main from "../../../@core/components/Home/Main";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MainProps> = {
  title: "Components_TCF/Home/Main",
  component: Main,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Light", value: "#FFFFFF" }],
      default: "Light",
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    vantagens: {
      description: "Lista de vantagens oferecidas pelo banco",
      control: { type: "object" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultMain: Story = {
  args: {
    vantagens: [
      {
        icon: "img_home/Ícone Presente.svg",
        title: "Conta e cartão gratuitos",
        description: "Conta digital sem custo fixo e sem tarifa de manutenção.",
      },
      {
        icon: "img_home/Ícone Saque.svg",
        title: "Saques sem custo",
        description: "4 saques gratuitos por mês em qualquer Banco 24h.",
      },
      {
        icon: "img_home/Ícone Pontos.svg",
        title: "Programa de pontos",
        description: "Acumule pontos com compras no crédito sem mensalidade.",
      },
      {
        icon: "img_home/Ícone Dispositivos.svg",
        title: "Seguro Dispositivos",
        description:
          "Proteja seus dispositivos móveis com uma mensalidade simbólica.",
      },
    ],
  },
};
