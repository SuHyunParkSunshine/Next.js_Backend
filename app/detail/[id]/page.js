import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Comment from "./Comment"
import NotFound from "./not-found"

export default async function Detail(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

    if(result === null) {
        //return <div?>404 없는 페이지임둥</div?
        return NotFound()
        
    }

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment parentId={result._id.toString()} />
        </div>
    )
}