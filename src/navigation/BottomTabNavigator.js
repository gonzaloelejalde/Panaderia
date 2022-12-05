import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from "./ShopNavigator"
import CartNavigator from './CartNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { Text } from 'react-native';
import IonIcons from "@expo/vector-icons/Ionicons"

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator initialRouteName='ShopTab' screenOptions = {{ headerShown: false, tabBarShowLabel: false, tabBarStyle: StyleSheet.tabBar}}>
                <BottomTabs.Screen 
                name="ShopTab" 
                component={ShopNavigator} 
                options = {{
                    tabBarIcon: ({focus}) => (
                    <View style = {styles.item}>
                        <IonIcons name = "home" size = {20} color = "black"/>
                        <Text>Tienda</Text>
                    </View>
                )}} />
                <BottomTabs.Screen 
                name="CartTab" 
                component={CartNavigator}
                options = {{
                    tabBarIcon: ({focus}) => (
                    <View style = {styles.item}>
                        <IonIcons name = "cart" size = {20} color = "black"/>
                        <Text>Carrito</Text>
                    </View>
                )}} />
            </BottomTabs.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabNavigator

const styles = StyleSheet.create ({
    tabBar: {
        shadowColor: "#7f5df0",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})