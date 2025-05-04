import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PlantScreen from '../screens/PlantScreen'
import PlantDetailScreen from '../screens/PlantDetailScreen'

const Stack = createNativeStackNavigator()

function MainNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Plant' component={PlantScreen} />
      <Stack.Screen name='PlantDetail' component={PlantDetailScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
