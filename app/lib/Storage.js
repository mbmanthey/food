import {AsyncStorage} from "react-native";

export default class Storage {
  storeSettings = async (settings) => {
    try {
      await AsyncStorage.setItem('UserSettings', settings)
    } catch (error) {
      console.log("Error saving user settings")
    }
  }

  fetchSettings = async () => {
    try {
      const value = await AsyncStorage.getItem('UserSettings')
      if (value !== null) {
        console.log(JSON.stringify(value))
      }
    } catch (error) {
     console.log("Error retrieving user settings")
    }
  }
  

}