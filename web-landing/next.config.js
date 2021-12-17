/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/manifest.json",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                ],
            },
        ]
    },
}
