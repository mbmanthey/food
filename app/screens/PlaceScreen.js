import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Query } from 'react-apollo';
import gql from "graphql-tag";
import PlaceDisplay from '../components/PlaceDisplay';
import { GlobalContext } from '../lib/GlobalContext';


export default class PlaceScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
    }
  }
  
  render() {
    return (
      <GlobalContext.Consumer>
        { (value) => (
          <PlaceQuery latitude={value.latitude} longitude={value.longitude}/>
        )}
     </GlobalContext.Consumer>
    )
  }
}

class PlaceQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      data: '',
    }
  }

  render() {
    if (this.state.data != '') {
      return (
        <Text>Error loading data</Text>
      );
    } else if (this.props.latitude != '') {
      return (
        <Query query={ HomeScreenQuery } 
        variables={{
          latitude:this.props.latitude, 
          longitude:this.props.longitude}}>
        {({ loading, error, data }) => {
          if (loading) return (<Text>Loading</Text>)
          if (error) return (<Text>{error}</Text>)
          mappeddata = data.search.business.map((value,index,data) => {
            return {
              business: data[index],
              key: data[index].id,
            }
          })
          return (
            <PlaceDisplay data={mappeddata}/>
          )
        }}
        </Query>
      )
    } else {
      return (
        <Text>{this.props.latitude}</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const HomeScreenQuery = gql`
query location($latitude: Float!, $longitude: Float!){
  search(latitude:$latitude,
         longitude:$longitude,
         radius: 2000,
         limit: 20) {
    business {
      name
      id
      alias
      rating
      review_count
      phone
      display_phone
      url
      photos
    }
  }
}
`
