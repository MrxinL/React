import axios from 'axios';

const Get = (parmes: string) => {
    return new Promise((res, rej) => {
    axios.get(parmes).then((respoone: any) => {
        res(respoone)
    }).catch(e => {
        rej(e)
    })
    })
}

const Post = (parmes: string, data: object) => {
    axios.post(parmes, data)
}
export {Get, Post}