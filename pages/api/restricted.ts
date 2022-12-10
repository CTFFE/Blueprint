import {NextApiRequest, NextApiResponse} from "next";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // qyl27: For testing only.
    // Todo: remove it before run it in production.
    const session = await unstable_getServerSession(req, res, authOptions);

    if (session) {
        res.json({
            hello: "world",
            user: session.user?.name
        });
    } else {
        res.json({
            no: "hello",
            user: "not login"
        });
    }
}
