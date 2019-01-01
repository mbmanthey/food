import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class FilterBar extends Component {
  constructor(props) {
    super(props)
  }

  toggleFilter = () => {
    this.props.toggleFilter()
  }

  render() {
    return (
      <View style={styles.rounded}>
        {/* <Container style={styles.filterButton}>
          <Button onPress={this.toggleFilter} transparent dark>
            <Icon name='ios-funnel' style={styles.icon}/>
          </Button>
        </Container> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rounded: {
    top: '50%',
    width: '100%',
    height: '5%',
    position: 'absolute',
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    backgroundColor: 'white',
    zIndex: 1,
  },
  filterButton: {
    alignSelf: 'flex-end',
    right: 20,
  }, 
  icon: {
    fontSize: 20,
  },
})
