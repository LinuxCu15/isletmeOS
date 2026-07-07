import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@isletmeos/ui", "@isletmeos/shared"],
};

export default nextConfig;
