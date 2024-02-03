import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PrimeraScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}></Text>
            <Text style={styles.box2}></Text>
            <Text style={styles.box3}></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3E50',
        justifyContent:'center',
    },
    box1: {
        backgroundColor: '#E0E0E0',
        width:90,
        height:90,
        borderWidth: 2,
        borderColor: 'white',
        position:'absolute',
        right:0,
        top:0
    },
    box2: {
        backgroundColor: '#FF5722',
        width:90,
        height:'80%',
        borderWidth: 2,
        borderColor: 'white',
        position:'absolute',
        right:0,
        
    },
    box3: {
        backgroundColor: '#A1887F',
        width:90,
        height:90,
        borderWidth: 2,
        borderColor: 'white',
        position:'absolute',
        right:0,
        bottom:0
    }
})

