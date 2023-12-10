import { connectDB } from "@/util/database"
import ListItem from "./ListItem"

export const revalidate = 20;

export default async function List() {

    const db = (await connectDB).db("forum") // 데이터베이스에 접속
    let result = await db.collection('post').find().toArray() // post collection에 있는 모든 데이터를 가져와 주세요

    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    )
}