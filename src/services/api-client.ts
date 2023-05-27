import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1d062b53d27a47e6b2afe8d9ae6b69c4'
    }
})