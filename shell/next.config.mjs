/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      remoteNextApp: 'remoteNextApp@http://localhost:3002/_next/static/chunks/remoteEntry.js',
    };
    const federatedConfig = {
      name: "host",
      filename: "static/chunks/remoteEntry.js",
      remotes: remotes,
      shared: {},
      extraOptions: {}, // Add appropriate options here
    };
    config.plugins.push(
      new NextFederationPlugin(federatedConfig)
    );
    return config;
  },
};
export default nextConfig;

