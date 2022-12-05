import { useFonts } from 'expo-font';
import ShopNavigator from "./src/navigation/ShopNavigator"
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    "RubikBubbles": require("./src/assets/fonts/RubikBubbles-Regular.ttf")
  })

  if(!fontsLoaded) {
    return null
  }

  return <BottomTabNavigator />
}