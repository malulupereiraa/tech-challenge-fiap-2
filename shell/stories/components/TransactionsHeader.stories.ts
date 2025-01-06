import TransactionsHeader from "../../@core/components/ui/header-transactions/TransactionsHeader";
import { HeaderProps } from "../Header";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components_TCF/Header/Header",
  component: TransactionsHeader,

  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<HeaderProps>;

export const CurrentHeader: Story = {
  args: {
    name: "Hermelinda da Silva Oliveira",
  },
};
