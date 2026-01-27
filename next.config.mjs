/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/3d-website',
    env: {
        NEXT_PUBLIC_BASE_PATH: '/3d-website',
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
