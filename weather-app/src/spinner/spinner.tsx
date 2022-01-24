import React from 'react';


class Loader extends React.Component{
    render(): React.ReactNode {
        return (
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        );
    }
}

export default Loader;