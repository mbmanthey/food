import { Component } from 'react';



export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticatedUser: "",
      usingGPS: true,
      restaurantFilter: [],
      cafeFilter: [],
      barFilter: [],
    }
  }

  render() {    
    return null;
  }
}
