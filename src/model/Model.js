import axios from "axios";

class Model {
    constructor() {
        this.apiKey = 'rcqYXzQ9PY1rQtUNJB9X56JOvnQWnf27S09nX8Rh'
        this.endPoint = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/'
    }
    get(relativepath, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.endPoint}${relativepath}`, {
                    params: params,
                    headers: {
                        "x-api-key": this.apiKey,
                    },
                })
                .then((resp) => {
                    resolve(resp.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    post(relativepath, data) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.endPoint}${relativepath}`, data, {
                    headers: {
                        "x-api-key": this.apiKey,
                    },
                })
                .then((resp) => {
                    resolve(resp.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

export default Model;