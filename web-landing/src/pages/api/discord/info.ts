import { NextApiRequest, NextApiResponse } from "next"
import { getData } from "."
import { serialize } from "cookie"

// can nhung thong tin gi tu discord

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const accessToken = req.cookies.discordAccessToken
        if (!accessToken) res.json(null)

        const { data } = await getData(accessToken)
        if (data) {
            res.json(data)
        } else {
            res.setHeader("Set-Cookie", serialize("discordAccessToken", "", { path: "/", maxAge: 1 }))
            res.status(401).json({ message: "Access token expired" })
        }
    }
}
