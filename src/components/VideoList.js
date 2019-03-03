import React from 'react';
import VideoItem from './VideoItem';

// the props object is destructured to remove videso from it
const VideoList = ({ videos, onVideoSelect }) => {
   const renderedList = videos.map((video) => {
      return (
         <VideoItem 
            onVideoSelect={onVideoSelect}
            video={video} />
      );
   });
   
   return (
      <div className="ui relaxed divided list"> 
         {renderedList} 
        </div>
   )
};

export default VideoList;
