import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Search from '../../components/Search'
import ProductCard from '../../components/Products/ProductCard'

const HomeScreen = (navigation) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>NMP Pharmacy</Text>
      </View>
      <Search />

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
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
  }
})