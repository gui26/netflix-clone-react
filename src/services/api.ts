import axios from "axios";

export const api= ()=>{
    return axios.create({
        baseURL:"https://viacep.com.br/ws/01001000/json/"
    });
};