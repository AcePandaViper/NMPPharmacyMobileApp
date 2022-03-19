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
    width: 250,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
})