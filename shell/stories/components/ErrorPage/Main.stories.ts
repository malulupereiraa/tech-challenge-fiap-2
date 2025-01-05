/* eslint-disable @typescript-eslint/no-explicit-any */
import Custom404 from "../../../pages/404";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<any> = {
  title: "Components_TCF/ErrorPage/ErrorPage",
  component: Custom404,
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultErrorPage: Story = {};
