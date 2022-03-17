import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const CartScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})