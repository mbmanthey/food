import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image 
} from 'react-native';

class Images extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
    return (
      <View style={styles.images}>
        {this.props.images.map((image,index) => (
          <View key={index} style={styles.image}> 
            <Image  
              style={styles.image}
              source={{uri: image}}
              resizeMode='cover'/>
          </View>
          )
        )}
      </View>
    )
  }
}

export default class ImageViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Images images={this.props.images}/>
    )
  }
}

const styles = StyleSheet.create({
  images: {
    width: '100%',
    height:'60%',
    position: 'absolute',
    top: 0,
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
