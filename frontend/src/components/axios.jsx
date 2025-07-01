import axios from 'axios';

const baseurl='http://127.0.0.1:8000/'
// You can also use an environment variable for the base URL'
const AxiosInstance = axios.create({
    baseURL: baseurl,
    timeout: 5000, // Set a timeout of 5 seconds
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',   
    }
});

export default AxiosInstance