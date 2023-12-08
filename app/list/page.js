import { connectDB } from "@/util/database"

export default async function List() {

    const db = (await connectDB).db("forum") // 데이터베이스에 접속
    let result = await db.collection('post').find().toArray() // post collection에 있는 모든 데이터를 가져와 주세요

    return (
        <div className="list-bg">
            <div className="list-item">
                <h4>{result[0].title}</h4>
                <p>{result[0].content}</p>
            </div>
            <div className="list-item">
                <h4>{result[1].title}</h4>
                <p>{result[1].content}</p>
            </div>
            <div className="list-item">
            <h4>{result[2].title}</h4>
                <p>{result[2].content}</p>
            </div>
        </div>
    )
}