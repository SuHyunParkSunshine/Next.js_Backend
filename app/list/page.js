import { connectDB } from "@/util/database"

export default async function List() {

    const db = (await connectDB).db("forum") // 데이터베이스에 접속
    let result = await db.collection('post').find().toArray() // post collection에 있는 모든 데이터를 가져와 주세요

    return (
        <div className="list-bg">
            {
                result.map((item) => {
                    return (
                        <div className="list-item">
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }           
        </div>
    )
}