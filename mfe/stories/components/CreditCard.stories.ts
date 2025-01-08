/* eslint-disable import/no-anonymous-default-export */
import { StoryObj } from "@storybook/react";
import { CreditCardProps } from "@/@core/props/credit-card";
import CreditCardTCF from "@/@core/components/CreditCard";

export default {
  title: "Components_TCF/CreditCard/CreditCard",
  component: CreditCardTCF,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    user: {
      description: "User Session Data",
    },
    transactions: {
      description: "Transactions List",
    },
  },
};

type Story = StoryObj<CreditCardProps>;

export const Base: Story = {
  args: {
    user: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzdlZDc5NWI4NTg3ZWFkZWQwODg5OTciLCJpYXQiOjE3MzYzNjYwMTcsImV4cCI6MTczNjQwOTIxN30.VRCic9xNy8Bl5g9-JP6zr9eiJeMiIl94pEpmxMwdMHQ",
      username: "Maria Luiza Pereira da Silva",
      widgets: {
        card: true,
        weather: false,
      },
    },
    transactions: [
      {
        _id: "677ed85ab8587eaded08899e",
        user: "677ed795b8587eaded088997",
        amount: 250,
        transactionType: "credito",
        description: "Transação Realizada na Home",
        date: "2025-01-08T19:54:40.448Z",
        __v: 0,
      },
    ],
  },
};
