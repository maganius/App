import axios from 'axios';
export default () => {
    return axios.create({
        baseURL: 'http://35.184.106.4/',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}