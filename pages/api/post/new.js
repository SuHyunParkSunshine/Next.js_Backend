import { connectDB } from "@/util/database"

export default async function handler(request, response) {

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