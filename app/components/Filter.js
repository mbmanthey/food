import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';

const restaurants = ['Barbeque', 'Burgers', 'Chinese', 'Italian', 'Mexican', 'Noodles', 'Pizza', 'Sandwiches', 'Steakhouses', 'Tex-Mex', 'Thai', 'Vegan']

CategoryButton = _ = (props) => (
  <Animated.View>
    <TouchableOpacity>
      <View >
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  </Animated.View>
)

CategoryList = categoryList = (props) => {
  data = restaurants.map((r, i) => {
    return ({
      restaurant: r,
      key: `${i}`
    })})
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <CategoryButton name={item.restaurant}/>}
    />
  )
}

export default class FilterBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: true,
      bar: false,
      cafe: false,
      categoryFilter: '',
    }
  }

  toggleFilter = () => {
    this.props.toggleFilter()
  }

  setToRestaurant = () => {
    this.setState(prevState => {
      return {restaurant: !prevState.restaurant}
    })
  }

  setToBar = () => {
    this.setState(prevState => {
      return {bar: !prevState.bar}
    })
  }

  setToCafe = () => {
    this.setState(prevState => {
      return {cafe: !prevState.cafe}
    })
  }
    
  render() {
    return (
      <View style={styles.filter}>
        {/* <Button onPress={this.toggleFilter} bordered light/> */}
        <View style={styles.filterButton}>
          {/* <Button onPress={this.setToRestaurant} bordered={!this.state.restaurant} light>
          </Button>
          <Button onPress={this.setToBar} bordered={!this.state.bar} light>
          </Button>
          <Button onPress={this.setToCafe} bordered={!this.state.cafe} light>
          </Button> */}
        </View>
        <View style={styles.categories}>
          <Text style={{fontSize:100}}>test</Text>
          <CategoryList state={this.state}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  filter: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    opacity: 0.9,
    position: 'absolute',
    zIndex: 2,
    borderRadius: 30,
  },
  filterButton: {
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    top:60,
    flex:1,
    flexDirection: 'row',
    zIndex: 2,
  }, 
  icon: {
    fontSize: 40,
  },
  categories: {
    position: 'relative',
    height: '85%',
    width: '100%',
    flex: 1,
    zIndex: 3,
  },
  categoryColumn: {
    flex: 0.3,
    flexDirection: 'row',
  },
})
