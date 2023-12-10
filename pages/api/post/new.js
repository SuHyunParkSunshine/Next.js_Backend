import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(request, response) {

    let session = await getServerSession(request, response, authOptions)
    if(session) {
        request.body.author = session.user.email
    }
    // console.log(request.body)

    if(request.method === 'POST') {

        if(request.body.title === '') {
            return response.status(500).json('제목을 입력하세요')
        }
        try {
            const client = await connectDB
            const db = client.db('forum')
            await db.collection('post').insertOne(request.body)

            return response.status(200).redirect(302, '/list')
        } catch(error) {
            return response.status(500).json('DB 저장 에러')
        }
    }
}