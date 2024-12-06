/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
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
      shared: {},
      exposes: {
        "./app": "./pages/index.tsx",
      },
      extraOptions: {}, // Add appropriate options here
    };
    config.plugins.push(
      new NextFederationPlugin(federatedConfig)
    );
    return config;
  },
};
module.exports = nextConfig;

