import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.text1}>Hello World</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text1:{
        color:'blue'
    }
})
