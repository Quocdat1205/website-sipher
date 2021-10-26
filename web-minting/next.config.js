/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/inventory",
                destination: "/inventory/inu",
                permanent: true,
            },
        ]
    },
}
