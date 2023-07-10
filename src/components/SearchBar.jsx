import React from "react";

class SearchBar extends React.Component{

    state = {
        term : "",
    };
   
    onFormSubmit= (event) => {
        event.preventDefault();

        //Callback recive from parent

        this.props.onFormSubmit(this.state.term);
    }
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };
render(){
    return (
        <>
          <form onSubmit={this.onFormSubmit}>
            <div  className="form-group">
                <input 
                className="form-control"
                type="search"
                placeholder="Search Anything here..."
                value={this.state.term}
                onChange={this.onInputChange}
                />
            </div>
          </form>
        </>
    );
}
}

export default SearchBar;