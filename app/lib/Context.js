import React, { Component } from 'react';
import { PermissionsAndroid } from 'react-native';
import { GlobalContext } from './GlobalContext';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Chewsy Location Permission',
        'message': 'Chewsy will show nearby places with your permisssion',
      }, PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Chewsy Location Permission',
        'message': 'Chewsy will show nearby places with your permisssion',
      }
    )
  } catch (err) {
    console.warn(err)
  }
}

export default class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      error: "",
    }
  }

  componentWillMount() {
    requestLocationPermission()
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.longitude)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: '',
        });
        console.log(position.coords.longitude)
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout:20000},
    )
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}