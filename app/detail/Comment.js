'use client'

import { useState } from "react"

export default function Comment() {

    // 리액트에선 보통 유저가 입력한 값을 state에 저장해두고 씁니다
    let [comment, setComment] = useState('')
    return (
        <div>
            <div>댓글 목록 보여줄 부분</div>
            <input onChange={(e) => { setComment(e.target.value) }} />            
            <button onClick={() => {
                console.log(comment)
                fetch('/URL', {method : 'POST', body : comment})
            }}>댓글 전송</button>
        </div>
    )
}