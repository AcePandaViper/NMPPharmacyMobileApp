import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Search from '../../components/Search'
import ProductCard from '../../components/Products/ProductCard'
import CategoryCard from '../../components/Categories/CategoryCard'

const image = { uri: "https://img.freepik.com/free-vector/pharmacy-online-store-banner_107791-2192.jpg" }

const HomeScreen = (navigation) => {
  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      <View style={styles.headerContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.headerContainerStyle}>
          <Search />
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{ alignItems: 'center', }}>
          <TouchableOpacity style={styles.uploadPrescription}>
            <Ionicons name='camera-outline' size={30} color='#fff' style={{ paddingHorizontal: 8 }} />
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Upload Your Prescription</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={{ fontSize: 15, fontWeight: '500', paddingHorizontal: 10, paddingVertical: 5,  }}>Shop by Category</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </ScrollView>

        <Text style={{ fontSize: 15, fontWeight: '500', paddingHorizontal: 10, paddingVertical: 5,  }}>Products</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ScrollView>

      </ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },

  headerContainer: {
    height: '40%',
    width: '100%',
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },

  headerContainerStyle: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadPrescription: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 280,
    backgroundColor: '#34b3f6',
    padding: 10,
    margin: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
})