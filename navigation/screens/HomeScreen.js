import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Search from '../../components/Search'
import ProductCard from '../../components/Products/ProductCard'
import CategoryCard from '../../components/Categories/CategoryCard'

const image = { uri: "https://media.istockphoto.com/vectors/frame-on-the-theme-of-health-medical-equipment-notebook-and-tablets-vector-id1189195717?k=20&m=1189195717&s=170667a&w=0&h=cRR6Wmhb1DDdX4yHbyxBZsN8ckbo17m2svItAdrbjvg=" }

const HomeScreen = (navigation) => {
  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#92dff1"
        barStyle="dark-content"
      />

      <View style={styles.headerContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.headerContainerStyle}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', left: 25 }}>
              <Text style={{ color: '#e91f27', fontWeight: '700', fontSize: 25, fontStyle: 'italic' }}>NMP </Text>
              <View style={{ backgroundColor: '#434193', paddingHorizontal: 5 }}>
                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>Pharmacy</Text>
              </View>
            </View>
            <Search />
          </View>
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <TouchableOpacity style={styles.uploadPrescription}>
            <Ionicons name='camera-outline' size={30} color='#fff' style={{ paddingHorizontal: 8 }} />
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Upload Your Prescription</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 18, fontWeight: '500', paddingHorizontal: 10, paddingVertical: 5, color: '#000000' }}>Shop by Category</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </ScrollView>

        <Text style={{ fontSize: 18, fontWeight: '500', paddingHorizontal: 10, paddingVertical: 5, color: '#000000' }}>Products
        </Text>

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
    backgroundColor: '#cbf3fb'
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
  },

  header: {
    top: 60,
    left: 20,
  },

  uploadPrescription: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 280,
    backgroundColor: '#bb3838',
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