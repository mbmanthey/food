import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import FilterBar from './FilterBar';
import Place from './Place';
import Filter from './Filter';


export default class PlaceDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      approved: [],
      filterShowing: false,
    };
    this.nextPlace = this.nextPlace.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)
  }

  approvePlace(place) {
    this.setState(prevState => {
      return {approved: prevState.approved.push(place)}
    })
  }

  rejectPlace(place) {
    this.setState(prevState => {
      return {rejected: prevState.rejected.push(place)}
    })
  }

  nextPlace() {
    if (this.state.index + 1 < this.props.data.length) {
      this.setState(prevState => {
        return {index: this.state.index + 1}
      })
    }
  }

  toggleFilter() {
    this.setState(prevState => {
      return {filterShowing: !this.state.filterShowing}
    })
  }

  render() {    
    if (this.state.filterShowing) {
      return (
        <View style={styles.placeDisplay}>
          <FilterBar toggleFilter={this.toggleFilter}/>
          <Place nextPlace={this.nextPlace} business={this.props.data[this.state.index].business}/>
          <Filter toggleFilter={this.toggleFilter}/>
        </View>
      )
    } else {
      return (
        <View>
          <FilterBar toggleFilter={this.toggleFilter}/>
          <Place nextPlace={this.nextPlace} business={this.props.data[this.state.index].business}/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  placeDisplay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
