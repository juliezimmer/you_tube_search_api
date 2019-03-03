import axios from 'axios';

const KEY = 'AIzaSyAVdlj-3MiCOMYX7mk7na2fuSn5yIm_yb0';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY 
   }
})
  