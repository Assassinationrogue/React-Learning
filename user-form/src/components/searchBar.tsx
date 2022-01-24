import React from "react";

class SearchBar extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input type="text" id="search" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
