import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
    let session = await getServerSession(request, response, authOptions) // 현재 로그인 된 유저 정보
    if(request.method == 'POST') {
        console.log(session)
        request.body = JSON.parse(request.body)

        let newComment = {
            content : request.body.comment,
            partent : new ObjectId(request.body.parentId),
            author : session.user.email
        }

        const db = (await connectDB).db('forum')
        let result = await db.collection('comment').insertOne(newComment)
        response.status(200).json('저장완료')
    }
}