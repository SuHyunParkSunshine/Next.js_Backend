export default function Write() {

    return(
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                제목 : <input type="text" name="title" placeholder="글 제목을 입력하세요" />
                내용 : <input type="text" name="content" placeholder="글 내용을 입력하세요"/>
                <input type="file" accept="image/*"/>
                <img src="" /> {/*createObjectURL 찾아서 갖다 쓰셈 */}
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}