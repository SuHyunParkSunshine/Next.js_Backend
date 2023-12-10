import { connectDB } from "@/util/database"

// export const revalidate = 60; // 누가 페이지 방문 시 60초 동안 캐싱됨(페이지 단위 캐싱)

export default async function Home() {

  const client = await connectDB
  const db = client.db('forum')
  //축약 version1
  //const db = (await connectDB).db('forum')
  // collection의 모든 document를 꺼내오기
  let result = await db.collection('post').find().toArray()

  // console.log(result)

  // await fetch('/URL', {cache : 'force-cache'}) // 'no-store' : 매번 서버로 요청해서 새거 가져옴(실시간 데이터)

  return (
    <div>안녕</div>
  )
}
