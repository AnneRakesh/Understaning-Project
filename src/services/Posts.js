import axios from 'axios';

export class Posts {
    baseUrl = 'https://jsonplaceholder.typicode.com';

    async createPost(url, postData) {
        return await axios
            .post(this.baseUrl + url, postData)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                throw new Error(err.message);
            });
    }

    async getAllPost(url) {
        return await axios
            .get(this.baseUrl + url)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                throw new Error(err.message);
            });
    }
}
