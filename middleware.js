import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
    // console.log(request.nextUrl) // 유저가 요청 중인 URL
    // console.log(request.cookies) // 유저의 cookie
    // console.log(request.headers) // 유저의 headers 정보(이전 방문 페이지/ 사용중인 OS, 브라우저/ 선호하는 언어/ IP/ 쿠키 등)
    // NextResponse.next()         // 통과시켜 주세요
    // NextResponse.redirect()     // 다른 페이지로 강제이동(주소창도 변경)
    // NextResponse.rewrite()      // 다른 페이지로 강제이동(현재 URL 유지, 주소창은 냅둠)

    const session = await getToken({ req: request })

    if (request.nextUrl.pathname.startsWith('/write')) {
        if (session == null) {
            return NextResponse.redirect(new URL('http://localhost:3000/api/auth/signin'), request.url)
        }
    }

    // 1. /list 페이지 접속 기록 몰래 저장하기
    // console.log(request.nextUrl.pathname)
    if (request.nextUrl.pathname.startsWith('/list')) {
        console.log(new Date())
        console.log(request.headers.get('sec-ch-ua-platform'))
        return NextResponse.next()
    }

    request.cookies.get('쿠키이름')     // 출력
    request.cookies.has('쿠키이름')     // 존재확인
    request.cookies.delete('쿠키이름')  // 삭제

    const response = NextResponse.next()
    response.cookies.set({
        name: 'mode',
        value: 'dark',
        maxAge: 3600,
        httpOnly: true // 자바스크립트로 쿠키 조작 방지 가능
    })
    return response


    // Q. 유저가 /register 페이지 방문시 visited=true 라는 쿠키를 생성해주려면 코드를 어떻게 짜야할까요?
    if (request.nextUrl.pathname.startsWith('/register')) {
        if (request.cookies.has('visited') == false) {
            const response = NextResponse.next()
            response.cookies.set({
                name: 'visited',
                value: 'true',
                maxAge: 3600
            })
            return response
        }
        return NextResponse.next()
    }
}