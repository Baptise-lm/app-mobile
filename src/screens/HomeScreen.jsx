import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur Plant</Text>
      <Text style={styles.subtitle}>L'application de plantes</Text>
      <Image
        source={require('../../assets/bootsplash/logo.png')}
        style={styles.plantImage}
      />
      <TouchableOpacity
        style={styles.buttonbg}
        onPress={() => navigation.navigate('Plant')}
      ><Text style={styles.buttonText}>Aller aux plantes</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16
  },
  buttonbg: {
    backgroundColor: '#06402B',
    padding: 16,
    borderRadius: 8,
    marginTop: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  plantContainer: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%'
  },
  plantImage: {
    width: 200,
    height: 200,
    marginBottom: 16
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  plantDetail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8
  }
})

export default HomeScreen
