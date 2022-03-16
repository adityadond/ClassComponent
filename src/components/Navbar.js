import React, { Component } from 'react';

export class NavBar extends Component {
  render() {
    return <div>
        <div className="col-12">
            <h2 className="bg-primary text-white text-center p2">
              {this.props.name}`s ToDo list
            </h2>
            
          </div>
    </div>;
  }
}

export default NavBar;
