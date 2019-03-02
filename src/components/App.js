import React from  'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

// holds application state
class App extends React.Component {
   state = {
      videos: [] // empty array is default value
   }
   
   // runs every time the search form is submitted
   // 'term' is what the user entered in the searchBar
   // onTermSubmit is added to the SearchBar component in render as a p   rop
   onTermSubmit = async term => {
      // youtube function is called, which is a pre-configured instance of axios.
      // the route or path to where the get request is made goes in the parens.
      // accesses the search endpoint
      // 2nd argument is the params object with the search term
      const response = await youtube.get('/search', {
         params: {
            q: term
         }
      });
      this.setState({ videos: response.data.items});
      
   }; 
   
   render() {
      return (
         <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            I have {this.state.videos.length} videos.
         </div>
      );
   }
}




export default App;