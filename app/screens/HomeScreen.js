import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
    }
  }
  
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={ () => {navigate('Places')} }>
          <View style={styles.place}>
            <Text style={styles.buttonText}>Places</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  contact: {
    flex: 1,
  },
  place: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#d6d7da',
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
  }
})
