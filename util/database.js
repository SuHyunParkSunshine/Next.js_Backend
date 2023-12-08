// 몽고 디비에서 node.js에서 사용할 때 이렇게 코드 짜라고 알려줌. 세팅하는 코드임
import { MongoClient } from "mongodb"

const url = 'mongodb+srv://admin:qwer1234@cluster0.0hr316t.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
    if(!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}
export { connectDB }