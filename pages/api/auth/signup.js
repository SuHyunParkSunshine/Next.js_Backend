import { connectDB } from "@/util/database"
import bcrypt from 'bcrypt'

export default async function handler(request, response) {
    if(request.method == 'POST') {
        let hash = await bcrypt.hash(request.body.password, 10)
        request.body.password = hash
        let db = (await connectDB).db('forum');
        await db.collection('user_cred').insertOne(request.body); //user_cred 회원정보 보관할 collection
        response.status(200).json('가입 성공')
    }
}