import React from  'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


// holds application state
class App extends React.Component {
   state = {
      videos: [], // empty array is default value
      selectedVideo: null
   }
   
   // runs every time the search form is submitted
   // onTermSubmit makes the request to the youtube search API
   onTermSubmit = async term => {
      // youtube.get() is called, which is a pre-configured instance of axios.
      // accesses the search endpoint
      const response = await youtube.get('/search', {
         params: {
            q: term
         }
      });
      this.setState({ videos: response.data.items});
   }; 

   onVideoSelect = (video) => {
      this.setState({ selectedVideo: video});   
   };
   
   render() {
      return (
         <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
               <div className="ui grid">
                  <div className="ui row">
                     <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                     </div>
                     <div className="five wide column">
                        <VideoList 
                           onVideoSelect={this.onVideoSelect}
                           videos={this.state.videos} />
                     </div>
                  </div>
               </div>
         </div>
      );
   }
}




export default App;