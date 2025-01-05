import { Meta, StoryObj } from "@storybook/react";
import StatementSection from "../../../@core/components/Statement/StatementSection";
import StatementSectionProps from "../../../@core/props/statement/statement-section";

const meta = {
  title: "Components_TCF/Statement/StatementSection",
  component: StatementSection,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "Dark", value: "#EEEEEE" }],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "The transactions",
    },
    month: {
      description: "The section title",
      control: "select",
      options: [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "novembro",
        "dezembro",
      ],
    },
  },
} satisfies Meta<StatementSectionProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    month: "março",
    items: [
      {
        id: "abc123",
        transactionType: "deposito",
        date: new Date("2024-01-01T00:00:00"),
        amount: 36.6,
      },
      {
        id: "efg456",
        transactionType: "deposito",
        date: new Date("2024-01-02T00:00:00"),
        amount: 48.3,
      },
      {
        id: "hij789",
        transactionType: "pix",
        date: new Date("2024-01-03T00:00:00"),
        amount: 150,
      },
    ],
  },
};
