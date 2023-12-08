import { connectDB } from "@/util/database"


export default async function Home() {

  const client = await connectDB
  const db = client.db('forum')
  //축약 version1
  //const db = (await connectDB).db('forum')
  // collection의 모든 document를 꺼내오기
  let result = await db.collection('post').find().toArray()

  console.log(result)

  return (
    <div>안녕</div>
  )
}
