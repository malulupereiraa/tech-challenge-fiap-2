/* eslint-disable import/no-anonymous-default-export */
import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonProps } from "../../@core/props/button";
import { BsTrash3Fill } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import React from "react";
import ButtonTCF from "../../@core/components/ui/Button";

export default {
  title: "Components_TCF/Button/Button",
  component: ButtonTCF,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "How large should the button be?",
    },
    variant: {
      control: "radio",
      description: "Button color",
      options: [
        "base",
        "orange",
        "dark",
        "dark-outline",
        "green",
        "green-outline",
      ],
    },
    rounded: {
      control: "boolean",
      description: "If button is rounded",
    },
    label: {
      description: "If button hasnt icon, use this param",
    },
    disabled: {
      description: "Controls if button is disabled of not",
    },
  },
  args: { onClick: fn() },
};

type Story = StoryObj<ButtonProps>;

export const Base: Story = {
  args: {
    size: "sm",
    label: "Botão Base Color",
    disabled: false,
    variant: "base",
  },
};

export const Green: Story = {
  args: {
    size: "sm",
    label: "Botão Green Color",
    disabled: false,
    variant: "green",
  },
};

export const OutlineGreen: Story = {
  args: {
    size: "sm",
    label: "Botão Outline Green Color",
    disabled: false,
    variant: "green-outline",
  },
};

export const Orange: Story = {
  args: {
    size: "sm",
    label: "Botão Orange Color",
    disabled: false,
    variant: "orange",
  },
};

export const Dark: Story = {
  args: {
    size: "sm",
    label: "Botão Dark Color",
    disabled: false,
    variant: "dark",
  },
};

export const OutlineDark: Story = {
  args: {
    size: "sm",
    label: "Botão Outline Dark Color",
    disabled: false,
    variant: "outline-dark",
  },
};

export const EditRoundedIcon: Story = {
  args: {
    size: "sm",
    icon: React.createElement(ImPencil),
    disabled: false,
    variant: "base",
    rounded: true,
  },
};

export const DeleteRoundedIcon: Story = {
  args: {
    size: "sm",
    icon: React.createElement(BsTrash3Fill),
    disabled: false,
    variant: "base",
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    size: "sm",
    label: "Botão Inativo",
    disabled: true,
    variant: "base",
  },
};
