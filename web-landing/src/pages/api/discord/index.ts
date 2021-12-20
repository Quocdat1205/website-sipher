import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"
import { serialize } from "cookie"

const client_id = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_DISCORD_SECRET

const getAccessTokenFromCode = (code: string) => {
    return axios.post(
        `https://discord.com/api/oauth2/token`,
        `client_id=${client_id}&client_secret=${client_secret}&grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/api/discord`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    )
}

export const getData = async (token: string) => {
    return await axios.get(`https://discord.com/api/oauth2/@me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        if (req.query.code) {
            try {
                const { data } = await getAccessTokenFromCode(req.query.code as string)
                const accessToken = data.access_token
                // const refreshToken = data.refresh_token
                // const { data: info } = await getData(accessToken)
                res.setHeader("Set-Cookie", serialize("discordAccessToken", accessToken, { path: "/", maxAge: 86400 }))
                // chinh lai trang minh muon toi, ukm, trang ma co query de lay info
                res.redirect("/quests")
            } catch (e: any) {
                res.status(400).json({ error: e.response.data })
            }
        }
    }

    if (req.method === "DELETE") {
        res.setHeader("Set-Cookie", serialize("discordAccessToken", "", { path: "/", maxAge: 1 }))
        res.json("Logout successfully")
    }
}
