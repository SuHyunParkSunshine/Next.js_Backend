import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    if (request.method === 'POST') {
        // console.log(request.body)
        let updatedData = {
            title: request.body.title,
            content: request.body.content
        }

        const client = await connectDB
        const db = client.db('forum')
        let result = await db.collection('post').updateOne(
            { _id: new ObjectId(request.body._id) },     //어떤 document 수정할 지 >> 유저에게 보내라고 하는 방식으로 진행
            { $set: updatedData }                        // 수정할 내용
        )
        response.status(200).redirect(302, '/list')
    }
}