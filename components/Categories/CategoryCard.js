import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryCard = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, marginVertical: 5 }}>
      <View style={styles.categoryIcon}></View>
      <Text style={{ fontSize: 12, fontWeight: '500', marginTop: 5, }}>Category</Text>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  categoryIcon: {
    backgroundColor: 'yellow',
    height: 60,
    width: 60,
    borderRadius: 30,
  }
})