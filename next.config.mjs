/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ["image.tmdb.org", "themoviedb.org"],
  },
};

export default nextConfig;
