/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/inventory",
                destination: "/inventory/neko",
                permanent: true,
            },
        ]
    },
    images: {
        domains: ["sipherstorage.s3.ap-southeast-1.amazonaws.com"],
    },
}
