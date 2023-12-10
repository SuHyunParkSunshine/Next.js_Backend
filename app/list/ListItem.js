'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem({ result }) {

    return (
        <div>
            {
                result.map((item, i) =>  // return() + 중괄호 동시에 생략 가능                    
                    <div className="list-item" key={i}>
                        <Link href={`/detail/${result[i]._id}`}>
                            <h4>{result[i].title}</h4>
                        </Link>
                        {/* <DetailLink /> */}
                        <Link href={'/edit/' + result[i]._id}>✏️</Link>
                        <span onClick={(e) =>
                            fetch('/api/post/delete', {
                                method: 'DELETE',
                                body: result[i]._id
                            })
                            .then((response) => {
                                if(response.status == 200) {
                                    return response.json();
                                } else {
                                    // 서버가 에러코드 전송 시 실행할 코드(서버가 status(500) 같은거 보낼 때)
                                }
                            })
                            .then(() => {
                                // 성공 시 실행할 코드
                                e.target.parentElement.style.opacity = 0
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'
                                }, 1000)
                            }).catch((error) => {
                                // 인터넷 문제로 실패시 실행할 코드(네트워크 에러)
                                console.log(error)
                            })
                            // fetch('api/abc/park') // query string 형태
                        }>🗑️</span>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}