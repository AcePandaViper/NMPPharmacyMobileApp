import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import SearchScreen from './screens/SearchScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import CartScreen from './screens/CartScreen'

// Screens Names
const home = 'Home'
const settings = 'Settings'
const search = 'Search'
const categories = 'Categories'
const cart = 'Cart'

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={home}
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size })  => {
          let iconName;
          let rn = route.name;

          if ( rn === home ) {
            iconName = focused ? 'home' : 'home-outline';
          } else if ( rn === search ) {
            iconName = focused ? 'search' : 'search-outline';
          }
          else if ( rn === cart ) {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          else if ( rn === categories ) {
            iconName = focused ? 'grid' : 'grid-outline';
          }
          else if ( rn === settings ) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          

          return <Ionicons name={iconName} size={size} color={color}/>
        }
      }) }
      >
        <Tab.Screen name={home} component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name={search} component={SearchScreen} options={{ headerShown: false }} />
        <Tab.Screen name={cart} component={CartScreen} options={{ headerShown: false }} />
        <Tab.Screen name={categories} component={CategoriesScreen} options={{ headerShown: false }} />
        <Tab.Screen name={settings} component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer