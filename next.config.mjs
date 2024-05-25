/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "bookline.s3.eu-east-1.amazonaws.com",
            "bookline.s3.amazonaws.com"
        ]
    }
};

export default nextConfig;
