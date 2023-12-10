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
                        <span onClick={() =>
                            fetch('/api/test', {
                                method: 'POST',
                                body : 
                            })
                                .then(() => {
                                    console.log(123123)
                                })
                        }>🗑️</span>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}