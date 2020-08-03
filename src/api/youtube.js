import axios from 'axios';

//Creating an axios instance which helps in configuring the axios requests in the project
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})