/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config: any, options: any) {
    const { isServer } = options;
    const federatedConfig = {
      name: "remoteNextApp",
      filename: "static/chunks/remoteEntry.js",
      remotes: {},
      shared: {
        "styled-components": { singleton: true, eager: true },
      },
      exposes: {
        "./app": "./pages/index.tsx",
        "./widgets": "./pages/widgets/index.tsx",
      },
      extraOptions: {}, // Add appropriate options here
    };
    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};
module.exports = nextConfig;

