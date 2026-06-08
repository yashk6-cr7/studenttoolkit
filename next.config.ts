import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/studenttoolkit",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
