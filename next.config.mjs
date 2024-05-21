/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'picsum.photos'],
    },
    typescript:{
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
