export default function handler(request, response) {
    if(request.method == 'POST') {
        response.status(200).json('처리완료')
    }    
}