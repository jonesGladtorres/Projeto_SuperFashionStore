import axios from "axios";

export const api = axios.create({
    baseURL: 'https://fake-api-fashionstore-jonestorres.onrender.com',
    timeout: 8000,
    headers: {
        
    }
})