import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import ImageViewer from "./ImageViewer";

export default class Place extends Component {
  constructor(props) {
    super(props)
  }

  nextPlace = () => {
    this.props.nextPlace()
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageViewer images={this.props.business.photos} style={styles.image}/>
        <View style={styles.detail}>
          <Text style={styles.title}>{this.props.business.name}</Text>
          <Text>{this.props.business.rating}</Text>
          <Text>{this.props.business.display_phone}</Text>
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(this.props.business.url)}>
            Yelp Link
          </Text>
          <View style={styles.xButton}>
            <TouchableOpacity  onPress={this.nextPlace}>
              <Text>No</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkButton}>
            <TouchableOpacity  onPress={this.nextPlace}>
              <Text>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'100%',
  }, 
  image: {
    width: '100%',
    height:'60%',
    position: 'absolute',
    top:0
  },
  detail: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  xButton: {
    position: 'absolute',
    width: '50%',
    left: 10,
    backgroundColor: 'red',
    bottom: 10,
  },
  checkButton: {
    position: 'absolute',
    width: '50%',
    right: 10,
    backgroundColor: 'green',
    bottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 30,
  }
})
