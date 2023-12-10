import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    if(request.method === 'DELETE') {
        
        // console.log(request.body)
        try {
            const client = await connectDB
            const db = client.db('forum')
            let result = await db.collection('post').deleteOne({ _id : new ObjectId(request.body) })
            response.status(200).json('삭제완료')
        } catch(error) {
            response.status(500).json('에러 발생')
        }        

        // console.log(result) // 

    }
}