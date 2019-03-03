import React from 'react';

const VideoDetail = ({ video }) => {
   // if there is no vides; video does not exist; if the value of selectedVideo is null
   if (!video) {
      return <div>Loading...</div>
   }
   return <div>{video.snippet.title}</div>

};

export default VideoDetail;