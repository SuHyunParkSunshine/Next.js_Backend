'use client'

import { useEffect, useState } from "react"

export default function Comment(props) {

    // 리액트에선 보통 유저가 입력한 값을 state에 저장해두고 씁니다
    let [comment, setComment] = useState('')

    useEffect(() => { // 쓸데없는 코드 보관함, 보통 ajax, 타이머 넣음
        fetch()
    }, [])

    return (
        <div>
            <div>댓글 목록 보여줄 부분</div>
            <input onChange={(e) => { setComment(e.target.value) }} />            
            <button onClick={() => {
                console.log(comment)
                fetch('/api/comment/new', {
                    method : 'POST',
                    body : JSON.stringify({ comment : comment, parentId : props.parentId})
                })
            }}>댓글 전송</button>
        </div>
    )
}