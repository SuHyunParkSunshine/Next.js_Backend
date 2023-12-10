import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    
    // console.log(request.query.parentId)
    const db = (await connectDB).db('forum')
    let result = await db.collection('comment').find({ parent : new ObjectId(request.query.parentId) }).toArray()
    
    response.status(200).json(result)
}