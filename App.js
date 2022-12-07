import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from "./src/store"

export default function App() {
  const [fontsLoaded] = useFonts({
    "RubikBubbles": require("./src/assets/fonts/RubikBubbles-Regular.ttf")
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <Provider store = {store}>
      <BottomTabNavigator />
    </Provider>
  )
}