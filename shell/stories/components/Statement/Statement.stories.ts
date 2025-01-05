import { Meta, StoryObj } from "@storybook/react";
import Statement from "../../../@core/components/Statement";
import StatementProps from "../../../@core/props/statement/statement";

const meta = {
  title: "Components_TCF/Statement/Statement",
  component: Statement,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#EEEEEE" }],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    transactions: {
      description: "The list of transactions",
    },
  },
  args: {},
} satisfies Meta<StatementProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: false,
    transactions: [
      {
        id: "a1b2c3",
        transactionType: "deposito",
        date: "2024-01-03",
        amount: 36.6,
      },
      {
        id: "a2b3c4",
        transactionType: "deposito",
        date: "2024-01-12",
        amount: 12.6,
      },
      {
        id: "a3b4c5",
        transactionType: "pix",
        date: "2024-03-03",
        amount: 42.9,
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    transactions: [],
  },
};
