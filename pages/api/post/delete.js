import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
    if (request.method === 'DELETE') {
        // console.log(request.body)
        let session = await getServerSession(request, response, authOptions)

        const client = await connectDB
        const db = client.db('forum')

        let found = await db.collection('post').findOne({ _id: new ObjectId(request.body) })

        // console.log(found.author)
        // console.log(session.user.email)
        
        if (found.author == session.user.email) {
            // try {
                let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.body) })
                return response.status(200).json('삭제완료')
            // } catch (error) {
            //     response.status(500).json('에러 발생')
            // }
        } else {
            return response.status(500).json('현재 유저와 작성자 불일치')
        }
        // console.log(result)

    }
}