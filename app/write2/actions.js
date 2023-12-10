'use server' // 자동으로 서버 API로 변함
export async function handleSubmit(formData) {
    console.log(formData.get('title'))
}