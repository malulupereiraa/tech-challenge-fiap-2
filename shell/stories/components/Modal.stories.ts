/* eslint-disable import/no-anonymous-default-export */
import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ModalProps } from "../../@core/props/modal";
import ModalTCF from "../../@core/components/ui/Modal";

export default {
  title: "Components_TCF/Modal/Modal",
  component: ModalTCF,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "If true, appears to the user.",
    },
    sizeModal: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "How large should the modal be?",
    },
    title: {
      description: "Modal title. It should be passed or not.",
    },
    body: {
      description: "Modal body. Should be passed a string or a component.",
    },
    hasFooter: {
      control: "boolean",
      description: "If true, appears to the user.",
    },
    center: {
      control: "boolean",
      description: "If true, appears in center of the screen to the user.",
    },
    type: {
      control: "radio",
      options: ["delete", "home", undefined],
      description: "Modal Type?",
    },
  },
  args: { onCloseAction: fn() },
};

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    isOpen: false,
    title: "Modal Default",
    body: "Modal Body",
    sizeModal: "md",
    hasFooter: true,
    center: true,
    type: undefined,
  },
};

export const Home: Story = {
  args: {
    isOpen: false,
    title: undefined,
    body: "Modal Body",
    sizeModal: "md",
    hasFooter: false,
    center: true,
    type: "home",
  },
};

export const Delete: Story = {
  args: {
    isOpen: false,
    title: "Modal Delete",
    body: "Modal Body",
    sizeModal: "md",
    hasFooter: true,
    center: true,
    type: "delete",
  },
};
