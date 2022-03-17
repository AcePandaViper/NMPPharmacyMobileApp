import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Search from '../../components/Search'

const SearchScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})