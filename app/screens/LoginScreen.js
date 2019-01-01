import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: '',
      longitude: '',
      error: '',
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar translucent/>
        <Button title="Login"
          onPress={ () => {navigate('Home')} }>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
