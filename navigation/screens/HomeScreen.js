import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Search from '../../components/Search'
import ProductCard from '../../components/Products/ProductCard'

const image = { uri: "https://nmp.com.pk/web/assets/images/banner-02.jpg" }

const HomeScreen = (navigation) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.headerContainerStyle}>
          <Search />
        </ImageBackground>
      </View>

      <TouchableOpacity style={styles.uploadPrescription}>
        <Ionicons name='camera-outline' size={30} color='#fff' />  
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Upload Your Prescription</Text>
      </TouchableOpacity>

      <Text>Shop by Category</Text>

      <ScrollView>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    height : '40%',
    width : '100%',
    transform : [ { scaleX : 2 } ],
    borderBottomStartRadius : 200,
    borderBottomEndRadius : 200,
    overflow : 'hidden',
  },
  headerContainerStyle: {
    flex : 1,
    transform : [ { scaleX : 0.5 } ],

    backgroundColor : 'yellow',
    alignItems : 'center',
    justifyContent : 'center'
  },
  uploadPrescription: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 20,
    margin: 20,
    borderRadius: 12,
  }
})