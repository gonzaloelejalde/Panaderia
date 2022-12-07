import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const BreadDetailsScreen = () => {
    const bread = useSelector((state) => state.bread.selected)

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Bread Details</Text>
        </View>
    )
}

export default BreadDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#63BA13",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: "RubikBubbles"
    }
})