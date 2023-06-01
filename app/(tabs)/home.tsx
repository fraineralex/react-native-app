import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://unavatar.io/fraineralex' }} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>Frainer Alexander Encarnación</Text>
      <Text style={styles.text}>fraineralex2001@gmail.com</Text>
      <Text style={styles.text}>2021-0759</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  }
})

export default home