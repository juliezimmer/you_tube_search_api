import React from 'react';

class SearchBar extends React.Component {
   state = {
      term: ''
   };
   
   // onInputChage is an callback method that is called with an event object.
   // the value of term/input is taken from the event object and assigned to a state property. 
   onInputChange = (event) => {
     this.setState({ term: event.target.value})
   };

  // This is defined as an arrow function because this is a callback that is passed to some child element. 
   onFormSubmit = (event) => {
      event.preventDefault();
      // make sure callback is called from parent component

      // tells parent component (App.js) what the current search term that was entered by the user is
      this.props.onFormSubmit(this.state.term); 
   }

   render(){
      return (
         <div className="search-bar ui segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Video Search</label>
                  <input onChange={this.onInputChange} 
                     type="text" 
                     value={this.state.term} />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;