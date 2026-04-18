/** @type {import('next').NextConfig} */
const repoName = "portfolio";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? `/${repoName}` : "",
  },
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : "",
};

export default nextConfig;
