import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductCard = () => {
  return (
    <View style={styles.productCard}>
      <View style={styles.imgBox}>

      </View>
      <View style={styles.productDetails}>
          <Text style={{ fontSize: 17, fontWeight: '500' }}>Mask</Text>
          <Text style={{ color: "#274888", fontWeight: '700' }}>Rs. 1000</Text>
      </View>
      <TouchableOpacity style={styles.addButton}><Text style={{ color: '#fff' }}>Add to cart</Text></TouchableOpacity>
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
    productDetails: {
      alignItems: 'center'
    },
    imgBox: {
        backgroundColor: '#d52324',
        height: '70%',
    },
    addButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#d52324',
        borderRadius: 18,
    }
})