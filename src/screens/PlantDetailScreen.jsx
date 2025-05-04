import React from 'react'
import { Text, Image, StyleSheet, ScrollView } from 'react-native'

function PlantDetailScreen ({ route }) {
  const { plant } = route.params

  return (
    <ScrollView style={styles.container}>
      {plant.image_url && <Image source={{ uri: plant.image_url }} style={styles.plantImage} />}
      <Text style={styles.plantName}>{plant.common_name || 'Nom inconnu'}</Text>
      <Text style={styles.plantDetail}>Famille: {plant.family || 'Non spécifié'}</Text>
      <Text style={styles.plantDetail}>Genre: {plant.genus || 'Non spécifié'}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  plantImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    resizeMode: 'contain'
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  plantDetail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8
  }
})

export default PlantDetailScreen
