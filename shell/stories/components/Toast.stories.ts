import { Meta, StoryObj } from "@storybook/react";
import ToastTCF from "../../@core/components/Toast";
import ToastProps from "../../@core/props/toast";

const meta = {
  title: "Components_TCF/Toast",
  component: ToastTCF,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#004D61" }],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { description: "An optional title" },
    message: { description: "The toast's message" },
    showToast: {
      description: "Determines if the toast should be displayed.",
      control: "boolean",
    },
    autohideDelay: {
      control: {
        type: "number",
        max: 6000,
        step: 1000,
      },
      description:
        "The amount of time in milliseconds after which the toast will disappear",
    },
    icon: {
      control: "radio",
      options: ["info", "warning", "success", "error"],
      description: "The toast's icon",
    },
    absolutePosition: {
      control: "boolean",
    },
  },
} satisfies Meta<ToastProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: "Sucesso!",
    message: "Transação XPTO concluída!",
    icon: "success",
    absolutePosition: false,
    showToast: true,
  },
};

export const Error: Story = {
  args: {
    title: "Vixe!",
    message: "Parece que deu ruim!",
    icon: "error",
    showToast: true,
  },
};

export const Warning: Story = {
  args: {
    title: "Cuidado!",
    message: "Algo de errado não parece certo!",
    icon: "warning",
    showToast: true,
  },
};

export const Info: Story = {
  args: {
    title: "Dica do dia",
    message: "Abacate faz bem pro cabelo!",
    icon: "info",
    showToast: true,
  },
};

export const NoTitle: Story = {
  args: {
    message: "Esse é um toast sem título",
    showToast: true,
  },
};
