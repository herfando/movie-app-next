import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Daftar domain gambar yang diizinkan oleh Next.js
    domains: ["image.tmdb.org"],

    // (Opsional) konfigurasi tambahan
    formats: ["image/avif", "image/webp"], // format modern untuk optimasi
  },
};

export default nextConfig;
