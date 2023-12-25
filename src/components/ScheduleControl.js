import React from "react";

//day changes based on clicker, showing schedule accordinglyimport React from "react";

class ScheduleControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      day: 0
    };
  }

  handleClick = () => {
    this.setState(prev => ({
      day: prev.day < 6 ? prev.day + 1 : 1
    }))
  }

  render() {
    let currDay = null;
    
  }
}