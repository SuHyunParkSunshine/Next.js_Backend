import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
    
    // console.log(props)
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
    // console.log(result)

    await db.collection('post').updateOne({}, {$set : {}})

    return(
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                {/* value & defaultValue(Next.js)속성 : input에 미리 입력된 값 */}
                제목  <input type="text" name="title" defaultValue={result.title} />
                내용  <input type="text" name="content" defaultValue={result.content} />
                <input style={{ display : 'none' }} name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}