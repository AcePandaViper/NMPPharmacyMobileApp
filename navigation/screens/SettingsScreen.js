import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const SettingsScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})