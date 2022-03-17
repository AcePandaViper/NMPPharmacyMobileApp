import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductCard = () => {
  return (
    <View style={styles.productCard}>
      <View style={styles.imgBox}>

      </View>
      <View style={styles.productDetails}>
          <Text>Mask</Text>
          <Text style={styles.productPrice}>Rs. 1000</Text>
      </View>
      <TouchableOpacity style={styles.addButton}><Text>Add to cart</Text></TouchableOpacity>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    productCard: {
        margin: 20,
        padding: 8,
        width: 180,
        height: 270,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    imgBox: {
        backgroundColor: '#FF5733',
        height: '70%',
    },
    productPrice: {
        left: '60%',
    },
    addButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FF5733',
        borderRadius: 18,
    }
})