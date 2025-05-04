import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'
import Config from 'react-native-config'

const LIMIT = 20

function PlantScreen ({ navigation }) {
  const [plantList, setPlantList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const getPlantList = async (page) => {
    if (!hasMore) return
    setIsLoading(true)
    try {
      const response = await axios.get(Config.TREFLE_API_URL, {
        params: {
          token: Config.TREFLE_API_KEY,
          q: '*',
          page,
          limit: LIMIT
        }
      })

      const data = response.data

      if (!data || !data.data || data.data.length === 0) {
        setHasMore(false)
        setIsLoading(false)
        return
      }

      setPlantList((prevList) => [...prevList, ...data.data])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error('Erreur lors du chargement des plantes :', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPlantList(page)
  }, [])

  const renderPlantItem = ({ item }) => (
    <TouchableOpacity style={styles.plantItem} onPress={() => navigation.navigate('PlantDetail', { plant: item })}>
      {item.image_url && <Image source={{ uri: item.image_url }} style={styles.plantImage} />}
      <View>
        <Text style={styles.plantName}>{item.common_name || 'Nom inconnu'}</Text>
        <Text style={styles.plantDetail}>Famille: {item.family || 'Non spécifié'}</Text>
        <Text style={styles.plantDetail}>Genre: {item.genus || 'Non spécifié'}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant Screen</Text>
      <FlatList
        data={plantList}
        renderItem={renderPlantItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size='large' color='#0000ff' /> : null
        }
      />
      {hasMore && (
        <TouchableOpacity style={styles.buttonbg} onPress={() => getPlantList(page)}>
          <Text style={styles.buttonText}>Afficher plus</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  plantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  plantImage: {
    width: 50,
    height: 50,
    marginRight: 16
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  plantDetail: {
    fontSize: 16,
    color: '#555'
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
  }
})

export default PlantScreen
