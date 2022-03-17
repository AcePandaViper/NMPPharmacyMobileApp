import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={{margin: 10}}>
      <TextInput
        style={styles.SearchInput}
        placeholder={'Search'}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
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