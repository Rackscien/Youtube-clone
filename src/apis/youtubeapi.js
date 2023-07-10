import axios from 'axios';

const KEY = 'AIzaSyAI4nc8QCmPM2eNLyfYOZMzn6EwNfuOtS0';

export default axios.create({
    baseURL :  'https://www.googleapis.com/youtube/v3/',
    params : {
        part: 'snippet',
        maxResult : 5,
        key : KEY,
    },
});
