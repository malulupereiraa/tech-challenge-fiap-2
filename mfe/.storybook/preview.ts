import "../styles/globals.css";
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../@theme/GlobalStyles";
import FontsStyles from "../pages/fonts/FontsStyles";
import { themed } from "../@theme/themed";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: themed,
    },
    defaultTheme: "default",
    Provider: ThemeProvider,
    GlobalStyles,
    FontsStyles,
  }),
];

export default preview;
