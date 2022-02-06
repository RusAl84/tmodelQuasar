import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:5000',
})

export default class API {
    static async sendMessage(text, topic_num) {
        // console.log(topic_num)
        const resp = await axios.post(`/tmodel`, {
            text: text,
            topic_num: topic_num,
        })
        return resp.data
    }
}