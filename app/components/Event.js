import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Event extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.date}><Text>{this.props.dateString}</Text></View>
        <View style={styles.details}><Text>{this.props.eventDetails}</Text></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '95%',
    borderColor: '#E06F23',
    borderWidth: 2,
    justifyContent: 'center',
    marginTop: '3%',

  },
  date: {
    width: '20%',
    borderColor: '#E06F23',
  },
  details: {
    width: '80%',
    borderColor: '#E06F23',
  }
})
