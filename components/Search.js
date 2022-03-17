import { StyleSheet, TextInput, View } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.SearchInput}
        placeholder={'Search'}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  SearchInput: {
    width: 300,
    padding: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    marginHorizontal: 25,
    
  },
})