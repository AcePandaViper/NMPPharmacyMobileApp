import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const CategoriesScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})