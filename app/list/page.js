import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default async function List() {

    const db = (await connectDB).db("forum") // 데이터베이스에 접속
    let result = await db.collection('post').find().toArray() // post collection에 있는 모든 데이터를 가져와 주세요

    return (
        <div className="list-bg">
            {
                result.map((item, i) =>  // return() + 중괄호 동시에 생략 가능                    
                    <div className="list-item" key={i}>
                        <Link href={`/detail/${result[i]._id}`}>
                            <h4>{result[i].title}</h4>
                        </Link>
                        {/* <DetailLink /> */}
                        <Link href={'/edit/' + result[i]._id}>✏️</Link>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}