import React from 'react';

const VideoDetail = ({ video }) => {
   // if there is no vides; video does not exist; if the value of selectedVideo is null
   if (!video) {
      return <div>Loading...</div>
   }
   return (
      <div>
         <div className="ui segment" >
            <h4 className="ui header"> {video.snippet.title} </h4>
            <p>{video.snippet.description}</p>
         </div>
      </div>
   );
};

export default VideoDetail;